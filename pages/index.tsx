import React from "react";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { H1, H2, H3 } from "../components/Heading";

const IndexPage = (): JSX.Element => {
  return (
    <Layout title="Home">
      <Container id="main-content">
        <H1>Hello, world!</H1>
        <H2>Hello, world!</H2>
        <H3>Hello, world!</H3>
      </Container>
    </Layout>
  );
};

export default IndexPage;
