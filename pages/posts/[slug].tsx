import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";
import { styled } from "../../stitches.config";

import { getAllPostIDs, getPostData } from "../../lib/posts";

import { Layout } from "../../components/Layout";
import { Date } from "../../components/Date";
import { Container } from "../../components/Container";
import { TextLink } from "../../components/TextLink";
import { Sidenote, SidenoteProps } from "../../components/Sidenote";
import { H1, H2, H3 } from "../../components/Heading";

const Header = styled("header", {
  textAlign: "center",
  marginBottom: "$1",
});

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const components = {
  a: ({ href, children }: LinkProps) => <TextLink to={href}>{children}</TextLink>,
  aside: ({ className, type, children }: SidenoteProps) => (
    <Sidenote type={type} className={className}>
      {children}
    </Sidenote>
  ),
  h1: H1,
  h2: H2,
  h3: H3,
};

interface PostProps {
  postData: {
    title: string;
    date: string;
    source: any;
  };
}

const Post = ({ postData: { title, date, source } }: PostProps): JSX.Element => {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIDs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug);

  return {
    props: {
      postData,
    },
  };
};

export default Post;