import React, { useState } from "react";
import { GetStaticProps } from "next";
import { Search } from "iconoir-react";
import { styled } from "~/stitches.config";

import { Date, Layout, Container, H1, Text, CardLink } from "~/components";

import { getSortedPostsData } from "~/lib/posts";

const PostsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
});

const SearchWrapper = styled("div", {
  position: "relative",
});

const SearchBar = styled("input", {
  padding: "calc(0.5 * $1)",
  borderRadius: "$1",
  border: "1px solid $slate7",

  background: "$slate2",

  color: "$text",

  fontFamily: "$sans",
  fontSize: "$1",

  width: "100%",
});

const SearchIcon = styled(Search, {
  position: "absolute",
  right: 10,
  top: 7,
});

type Props = {
  allPostsData: { slug: string; date: string; title: string; description: string }[];
};

const PostsPage = ({ allPostsData }: Props): JSX.Element => {
  const [searchValue, setSearchValue] = useState("");

  const posts = allPostsData.filter(
    ({ title, description }) =>
      title.toLowerCase().includes(searchValue.toLowerCase()) ||
      description?.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <Layout title="Posts">
      <Container as="div">
        <header>
          <H1>Posts</H1>
          <Text>
            Here's a collection of posts I've written about different things! Probably (mostly) all
            programming-related but who knows? Maybe some other topics will slip in here too.
          </Text>
          <SearchWrapper>
            <SearchBar
              type="text"
              placeholder={`Search through ${allPostsData.length} posts`}
              aria-label={`Search through ${allPostsData.length} posts`}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchIcon width={22} height={22} />
          </SearchWrapper>
        </header>
      </Container>
      <Container id="main-content">
        <PostsContainer>
          {posts.map(({ slug, date, title, description }) => (
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
