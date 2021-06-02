import React from "react";
import { Link, graphql } from "gatsby";

// Utilities
import kebabCase from "lodash/kebabCase";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { TextLink } from "../components/TextLink";

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Container>
      <h1>Tags</h1>
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <TextLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>{tag.fieldValue}</TextLink> (
            {tag.totalCount})
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
