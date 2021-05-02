import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { Layout } from "../components/Layout";
import { TextLink } from "../components/TextLink";

const shortcodes = { a: ({ href, children }) => <TextLink to={href}>{children}</TextLink> };

const PostTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx;

  return (
    <Layout>
      <header>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
      </header>
      <MDXProvider components={shortcodes}>
        <article>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </MDXProvider>
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
      }
    }
  }
`;
