import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { format, parseISO } from "date-fns";

import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { CardLink } from "../components/Card";

const PostSearch = styled.div`
  position: relative;

  input {
    padding: calc(0.5 * var(--font-size-base));
    border-radius: var(--border-radius);
    border: 1px solid var(--color-card-border);

    color: var(--color-text);

    font-family: var(--font-sans);
    font-size: var(--font-size-base);

    width: 100%;
  }

  svg {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  grid-row-gap: var(--font-size-base);
`;

const Date = styled.p`
  font-style: italic;
  font-size: var(--font-size-sm);
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
        <Date>{format(parseISO(frontmatter.date), "dd/MM/yyyy")}</Date>
        <p>{frontmatter.description}</p>
      </CardLink>
    ));

  return (
    <Layout>
      <Container as="div">
        <header>
          <h1>Posts</h1>
          <p>
            Here's a collection of posts I've written about different things! Probably (mostly) all
            programming-related but who knows? Maybe some other topics will slip in here too.
          </p>
          <PostSearch>
            <input
              type="text"
              placeholder={`Search through ${nodes.length} posts`}
              aria-label={`Search through ${nodes.length} posts`}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <BiSearch />
          </PostSearch>
        </header>
      </Container>
      <Container id="main-content">
        <PostsContainer>{posts}</PostsContainer>
      </Container>
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
