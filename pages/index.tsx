import React from "react";

import { styled } from "../stitches.config";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { H1, H2 } from "../components/Heading";
import { Text } from "../components/Text";
import { TextLink } from "../components/TextLink";
import { Sidenote } from "../components/Sidenote";
import { Emoji } from "../components/Emoji";
import { UnorderedList, Item } from "../components/List";

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
          <Text>
            I wanted to take this as an opportunity to build something with my favourite new tools
            (namely React and NextJS) that:
          </Text>
          <UnorderedList>
            <Item>looked a lot nicer, with fully responsive layout and styling</Item>
            <Item>
              packed in a lot more functionality, like reusable components, blog posts, and more
            </Item>
          </UnorderedList>
          <Text>
            I might write a little post detailing the full site stack at some point, but I'm mainly
            focussed on actually coding the thing at the moment!
          </Text>
          <Sidenote>
            <Text>
              Recently I discovered a new term I really liked:{" "}
              <b>
                <i>digital gardening.</i>
              </b>
            </Text>
            <Text>
              This lovely, horticultural phrase refers to the act of "cultivating" a website full of
              little snippets, posts and tidbits, letting it naturally evolve over time instead of
              strictly managing and defining its structure.
            </Text>
            <Text>
              I really like the concept of this, so it's not entirely impossible that I'll begin to
              use this site as my own <Emoji emoji="🌱" /> digital garden <Emoji emoji="🌱" /> of
              sorts, setting it up to hold various different types of{" "}
              <TextLink to="/posts">blog posts</TextLink>, snippets, and pages that I think are
              interesting or useful (either to me or others).
            </Text>
          </Sidenote>
        </section>
        <section>
          <H2>Contact Me</H2>
          <Text>
            If you'd like to get in touch, please send me a DM on{" "}
            <TextLink to="https://twitter.com/bensilverman_">Twitter</TextLink>!
          </Text>
        </section>
      </Container>
    </Layout>
  );
};

export default IndexPage;
