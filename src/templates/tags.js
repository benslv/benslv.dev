import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { TextLink } from "../components/TextLink";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return (
    <Layout>
      <Container>
        <h2>{tagHeader}</h2>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields;
            const { title } = node.frontmatter;
            return (
              <li key={slug}>
                <TextLink to={slug}>{title}</TextLink>
              </li>
            );
          })}
        </ul>
        <TextLink to="/tags">All tags</TextLink>
      </Container>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
