import React from "react";
import styled from "styled-components";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { TextLink } from "../components/TextLink";

import { breakpoint } from "../theme/config";

const Tag = styled.div`
  grid-column: 1 / span 6;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.p`
  grid-column: 1 / span 6;
  margin: 1em 0;

  text-align: center;

  ${breakpoint.md} {
    grid-column: 2 / span 4;
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <Container>
        <Tag>
          <h1>Oops!</h1>
          <p>It doesn&apos;t look like this page exists 😅</p>
        </Tag>
        <Message>
          Double-check the URL to make sure you are where you wanted to be. If something&apos;s not
          working that you think <i>should</i> be working, please{" "}
          <TextLink to="/contact">let me know!</TextLink>
        </Message>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
