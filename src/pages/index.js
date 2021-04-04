import React from "react";
import styled from "styled-components";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { TextLink } from "../components/TextLink";
import { Projects } from "../components/sections/Projects";
import { Cell } from "../components/Cell";

import { font, breakpoint } from "../theme/config";

const Hero = styled.div`
  grid-column: 1 / span 4;

  margin-top: 5rem;
  height: 100%;

  p {
    font-size: ${font.size.medium};
  }

  ${breakpoint.md} {
    height: 30vh;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <Hero>
          <h1>Hi, I&apos;m Ben!</h1>
          <p>
            I&apos;m a third-year Computer Science student at the University of York, currently on
            placement at <TextLink to="https://www.arm.com/">Arm</TextLink>.
          </p>
        </Hero>
        <Projects />
        <Cell lg="4" lgSpan="3c">
          <p>This is a cell</p>
        </Cell>
      </Container>
    </Layout>
  );
};

export default IndexPage;
