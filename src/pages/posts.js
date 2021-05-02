import React from "react";
import { graphql } from "gatsby";

import { TextLink } from "../components/TextLink";
import { Layout } from "../components/Layout";
import { Emoji } from "../components/Emoji";

const PostsPage = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  const posts = nodes.map(({ id, frontmatter, fields: { slug } }) => (
    <TextLink key={id} to={slug}>
      {frontmatter.title}
    </TextLink>
  ));

  return (
    <Layout>
      <h1>Posts</h1>
      {posts}
    </Layout>
  );
};

export default PostsPage;

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`;
