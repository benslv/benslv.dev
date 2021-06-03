const _ = require("lodash");

const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: "slug",
      node,
      value: `${value}`,
    });
  }
};

const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      postsMDX: allMdx(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("🚨  ERROR: Loading 'createPages' query");
  }

  const posts = result.data.postsMDX.edges;

  posts.forEach(({ node }, i) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/post.js"),
      context: { id: node.id },
    });
    console.log(`Created page at ${node.fields.slug}!`);
  });

  const tags = result.data.tagsGroup.group;

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: path.resolve("./src/templates/tags.js"),
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
