import React from "react";

import { Date } from "../components/Date";
import { Layout } from "../components/Layout";

import { getSortedPostsData } from "../lib/posts";
import { Container } from "../components/Container";
import { TextLink } from "../components/TextLink";
import { GetStaticProps } from "next";

interface Props {
  allPostsData: { slug: string; date: string; title: string }[];
}

const PostsPage = ({ allPostsData }: Props): JSX.Element => {
  return (
    <Layout title="Posts">
      <Container id="main-content">
        <ul>
          {allPostsData.map(({ slug, date, title }) => (
            <li key={slug}>
              <TextLink to={`/posts/${slug}`}>{title}</TextLink>
              <br />
              {slug}
              <br />
              <Date dateString={date} />
            </li>
          ))}
        </ul>
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
