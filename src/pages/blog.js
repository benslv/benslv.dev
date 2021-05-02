import React from "react";
import { graphql } from "gatsby";

import { TextLink } from "../components/TextLink";

const BlogPage = ({
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
    <div>
      <p>bruh</p>
      {posts}
    </div>
  );
};

export default BlogPage;

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
