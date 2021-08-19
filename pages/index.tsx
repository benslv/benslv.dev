import React from "react";

import { styled } from "../stitches.config";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { H1, H2 } from "../components/Heading";
import { Text } from "../components/Text";
import { TextLink } from "../components/TextLink";
import { Sidenote } from "../components/Sidenote";
import { Card, CardLink } from "../components/Card";

const Hero = styled("header", {
  [`& ${Text}`]: {
    fontSize: "$md",
  },
});

const IndexPage = (): JSX.Element => {
  return (
    <Layout title="Home">
      <Container id="main-content">
        <Hero>
          <H1>Hey there!</H1>
          <Text>
            Hi! I'm Ben, a third year Computer Science student at the University of York, currently
            working on placement at <TextLink to="https://arm.com/">Arm</TextLink>.
          </Text>
        </Hero>

        <section>
          <H2>This Website</H2>

          <Text>
            I recently decided to treat myself to a new website, because my{" "}
            <TextLink to="https://bensilverman.co.uk/">old one</TextLink> was beginning to look a
            little dated, and I've learned a lot about web development in the two years since I
            wrote it!
          </Text>
        </section>
        <section>
          <Sidenote>Here is some text in the sidenote.</Sidenote>
          <Sidenote type="info">Here is some text in the sidenote.</Sidenote>
          <Sidenote type="error">Here is some text in the sidenote.</Sidenote>
          <Sidenote type="warn">Here is some text in the sidenote.</Sidenote>
        </section>
        <section>
          <Card title="Hello!">I am a card.</Card>
          <CardLink title="Hello!" to="https://google.com">
            {" "}
            I am a linked card.
          </CardLink>
        </section>
      </Container>
    </Layout>
  );
};

export default IndexPage;
