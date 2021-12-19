import React, { useMemo } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { styled } from "stitches.config";

import { getMDXComponent } from "mdx-bundler/client";

import { getAllPostIDs, getPostData } from "~/lib/posts";

import {
  Container,
  Date,
  H1,
  H2,
  H3,
  Pre,
  Code,
  Text,
  Sidenote,
  TextLink,
  Layout,
} from "~/components";

import { SidenoteProps } from "~/components/Sidenote";
import { prismTheme } from "~/styles/prismTheme";

const Header = styled("header", {
  textAlign: "center",
  marginBottom: "$1",
});

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const components = {
  a: ({ href, children }: LinkProps) => <TextLink to={href}>{children}</TextLink>,
  Sidenote,
  h1: H1,
  h2: H2,
  h3: H3,
  p: Text,
  // code: Code,
  pre: ({ children }: { children: React.ReactNode }) => {
    return <Pre code={children} />;
  },
};

type PostProps = {
  postData: {
    title: string;
    date: string;
    source: string;
  };
};

const Post = ({ postData: { title, date, source } }: PostProps): JSX.Element => {
  const MDXComponent = useMemo(() => getMDXComponent(source), [source]);

  return (
    <Layout title={title}>
      <Container id="main-content">
        <Header>
          <H1>{title}</H1>
          <Date dateString={date} />
        </Header>
        <br />
        <article className={prismTheme()}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <MDXComponent components={components as any} />
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
