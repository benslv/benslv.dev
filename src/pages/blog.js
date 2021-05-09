import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { Container, WideContainer } from "../components/Container";
import { Layout } from "../components/Layout";
import { CardLink } from "../components/Card";

const PostSearch = styled.input`
  padding: calc(0.5 * var(--font-size-base));
  border-radius: var(--border-radius);
  border: 1px solid var(--color-card-border);

  color: var(--color-text);

  font-family: var(--font-sans);
  font-size: var(--font-size-base);
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  grid-column-gap: var(--font-size-base);
  grid-row-gap: var(--font-size-base);
`;

const BlogPage = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  const [searchValue, setSearchValue] = useState("");

  const posts = nodes
    .filter(
      ({ frontmatter }) =>
        frontmatter.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        frontmatter.description?.toLowerCase().includes(searchValue.toLowerCase()),
    )
    .map(({ id, frontmatter, fields: { slug } }) => (
      <CardLink title={frontmatter.title} to={slug} key={id}>
        <p>{frontmatter.description}</p>
      </CardLink>
    ));

  return (
    <Layout>
      <Container as="header">
        <h1>Posts</h1>
        <p>
          Here's a collection of posts I've written about different things! Probably (mostly) all
          programming-related but who knows? Maybe some other topics will slip in here too.
        </p>
      </Container>
      <WideContainer id="main-content">
        <PostSearch
          type="text"
          placeholder={`Search through ${nodes.length} posts`}
          aria-label={`Search through ${nodes.length} posts`}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <PostsContainer>{posts}</PostsContainer>
      </WideContainer>
    </Layout>
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
        frontmatter {
          title
          date
          description
        }
        fields {
          slug
        }
      }
    }
  }
`;
