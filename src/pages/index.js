import React from "react";

import { Container } from "../components/Container";
import { TextLink } from "../components/TextLink";
import { GlobalStyle } from "../theme/GlobalStyles";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <section>
          <h1>👋 Hi, I'm Ben!</h1>
          <p>
            I’m a third-year Computer Science student at the University of York, currently on
            placement at Arm.
          </p>
        </section>
        <section>
          <h2>About Me</h2>
          <p>
            Hi! I'm Ben, a third year Computer Science student at the University of York. I built
            this website to showcase the work I've been doing recently and to keep my skills web
            development skills warm.
          </p>
          <p>
            Outside of my studies, I usually spend my time programming, reading or playing in the
            University Jazz and Concert bands!
          </p>
          <h2>This Website</h2>
          <p>
            I'm currently in the process of building a new website for myself, so this is kind of
            acting as a holding page for now.
          </p>
          <p>
            If you'd like to get in touch, please send me a DM on{" "}
            <TextLink to="https://twitter.com/bensilverman_">
              Twitter
            </TextLink>
            !
          </p>
        </section>
      </Container>
    </>
  );
};

export default IndexPage;
