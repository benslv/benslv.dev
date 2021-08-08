import React from "react";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";

const IndexPage = (): JSX.Element => {
  return (
    <Layout title="Home">
      <Container id="main-content">
        <h1>Hello, world!</h1>
      </Container>
    </Layout>
  );
};

export default IndexPage;
