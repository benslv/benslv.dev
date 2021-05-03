import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { Layout } from "../components/Layout";
import { TextLink } from "../components/TextLink";
import { Sidenote } from "../components/Sidenote";

const shortcodes = {
  a: ({ href, children }) => <TextLink to={href}>{children}</TextLink>,
  aside: ({ className, children }) => <Sidenote className={className}>{children}</Sidenote>,
};

const Header = styled.header`
  text-align: center;
  margin-bottom: 1em;
`;

const PostTemplate = ({ data }) => {
  const { frontmatter, timeToRead, body } = data.mdx;

  return (
    <Layout>
      <Header>
        <h1>{frontmatter.title}</h1>
        <p>
          {frontmatter.date} • {timeToRead} minutes
        </p>
      </Header>
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
      timeToRead
    }
  }
`;
