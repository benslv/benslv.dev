import React from "react";
import { styled } from "../../stitches.config";

import { getAllPostIDs, getPostData } from "../../lib/posts";

import { Layout } from "../../components/Layout";
import { Date } from "../../components/Date";
import { Container } from "../../components/Container";
import { H1 } from "../../components/Heading";

const Header = styled("header", {
  textAlign: "center",
  marginBottom: "$1",
});

const Post = ({ postData }) => {
  return (
    <Layout title={postData.title}>
      <Container id="main-content">
        <Header>
          <H1>{postData.title}</H1>
          <Date dateString={postData.date} />
        </Header>
        <br />
        <article dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
      </Container>
    </Layout>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const paths = getAllPostIDs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.slug);

  return {
    props: {
      postData,
    },
  };
};
