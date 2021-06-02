import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { TextLink } from "../components/TextLink";

const Header = styled.section`
  display: grid;
  row-gap: var(--font-size-md);
`;

const AboutPage = () => {
  return (
    <Layout title="About">
      <Container id="main-content">
        <Header>
          <StaticImage
            src="../images/profile.jpg"
            alt="Head and shoulders picture of me!"
            style={{
              borderRadius: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow: "var(--box-shadow-light)",
              margin: "0 auto",
            }}
            placeholder="tracedSVG"
            aspectRatio={1 / 1}
            layout="constrained"
            width={150}
            quality={100}
          />
          <div>
            <h2>About Me</h2>
            <p>
              Hi! I'm Ben, a third year Computer Science student at the University of York,
              currently working on placement at <TextLink to="https://arm.com">Arm</TextLink>.
            </p>
            <p>
              I'm mainly interested in frontend development at the moment and spend a lot of my time
              on different React projects. I love the concept of creating something that other
              people find <i>genuinely</i> useful (especially if they're people I don't know!) and
              the process behind new projects, all the way from having an idea, to designing it, to
              developing it and hosting it for other people to use is so much fun!
            </p>
            <p>
              <b>Outside of my studies</b>, I usually spend my time{" "}
              <TextLink to="https://github.com/benslv">programming</TextLink>,{" "}
              <TextLink to="https://goodreads.com/benslv">reading</TextLink> or playing in the
              University Jazz and Concert Bands! I also enjoy playing{" "}
              <TextLink to="https://www.trackmania.com/">Trackmania</TextLink> too!
            </p>
          </div>
        </Header>
      </Container>
    </Layout>
  );
};

export default AboutPage;
