import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { styled } from "../../stitches.config";

import { getAllPostIDs, getPostData } from "../../lib/posts";

import { Layout } from "../../components/Layout";
import { Date } from "../../components/Date";
import { Container } from "../../components/Container";
import { TextLink } from "../../components/TextLink";
import { Sidenote } from "../../components/Sidenote";
import { H1, H2, H3 } from "../../components/Heading";

const Header = styled("header", {
  textAlign: "center",
  marginBottom: "$1",
});

const components = {
  a: ({ href, children }) => <TextLink to={href}>{children}</TextLink>,
  aside: ({ className, type, children }) => (
    <Sidenote type={type} className={className}>
      {children}
    </Sidenote>
  ),
  h1: H1,
  h2: H2,
  h3: H3,
};

const Post = ({ postData: { title, date, source } }) => {
  return (
    <Layout title={title}>
      <Container id="main-content">
        <Header>
          <H1>{title}</H1>
          <Date dateString={date} />
        </Header>
        <br />
        <article>
          <MDXRemote {...source} components={components} />
        </article>
      </Container>
    </Layout>
  );
};

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

export default Post;
