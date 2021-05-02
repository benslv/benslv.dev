import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { Card } from "../components/Card";

const PostsPage = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  const posts = nodes.map(({ id, frontmatter, excerpt, fields: { slug } }) => (
    <Card title={frontmatter.title} to={slug} key={id}>
      <p>{excerpt}</p>
    </Card>
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
