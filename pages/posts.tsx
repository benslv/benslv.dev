import React from "react";
import { styled } from "../stitches.config";

import { Date } from "../components/Date";
import { Layout } from "../components/Layout";

import { getSortedPostsData } from "../lib/posts";
import { Container } from "../components/Container";
import { GetStaticProps } from "next";
import { H1 } from "../components/Heading";
import { Text } from "../components/Text";
import { CardLink } from "../components/Card";

const PostsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
});

interface Props {
  allPostsData: { slug: string; date: string; title: string }[];
}

const PostsPage = ({ allPostsData }: Props): JSX.Element => {
  return (
    <Layout title="Posts">
      <Container as="div">
        <header>
          <H1>Posts</H1>
          <Text>
            Here's a collection of posts I've written about different things! Probably (mostly) all
            programming-related but who knows? Maybe some other topics will slip in here too.
          </Text>
        </header>
      </Container>
      <Container id="main-content">
        <PostsContainer>
          {allPostsData.map(({ slug, date, title, description }) => (
            <CardLink title={title} key={slug} to={`/posts/${slug}`}>
              <Date dateString={date} />
              <Text>{description}</Text>
            </CardLink>
          ))}
        </PostsContainer>
      </Container>
    </Layout>
  );
};

export default PostsPage;

export const getStaticProps: GetStaticProps = () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};
