import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { TextLink } from "../components/TextLink";
import { Sidenote } from "../components/Sidenote";
import { TagLink } from "../components/TagLink";

const shortcodes = {
  a: ({ href, children }) => <TextLink to={href}>{children}</TextLink>,
  aside: ({ className, children }) => <Sidenote className={className}>{children}</Sidenote>,
};

const Header = styled.header`
  text-align: center;
  margin-bottom: 1em;
`;

const Tags = styled.span`
  font-size: var(--font-size-base);

  text-transform: uppercase;

  color: var(--color-accent);

  font-weight: 500;

  display: flex;
  gap: var(--font-size-base);
  justify-content: center;
`;

const PostTemplate = ({ data }) => {
  const { frontmatter, timeToRead, body } = data.mdx;

  console.log(frontmatter.tags);

  return (
    <Layout>
      <Container id="main-content">
        <Header>
          <h1>{frontmatter.title}</h1>
          <p>
            {frontmatter.date} • {timeToRead} {timeToRead === 1 ? "minute" : "minutes"}
          </p>
          <Tags>
            {frontmatter.tags
              ? frontmatter.tags.map((tag, i) => <TagLink tag={tag} key={i} />)
              : null}
          </Tags>
        </Header>
        <MDXProvider components={shortcodes}>
          <article>
            <MDXRenderer>{body}</MDXRenderer>
          </article>
        </MDXProvider>
      </Container>
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
        tags
        date(formatString: "Do MMMM YYYY")
      }
      timeToRead
    }
  }
`;
