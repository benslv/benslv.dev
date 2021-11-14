import React from "react";
import Image from "next/image";
import { css } from "../stitches.config";

import { H1, TextLink, Text, Layout, Container } from "../components";

import profile from "../public/profile.jpg";

const profilePhoto = css({
  margin: "0 auto",

  borderRadius: "50%",
  overflow: "hidden",
  height: 150,

  boxShadow: "$light",
});

const AboutPage = (): JSX.Element => {
  return (
    <Layout title="About Me">
      <Container>
        <div className={profilePhoto()}>
          <Image
            src={profile}
            alt="Head and shoulders photo of me."
            width={150}
            height={150}
            placeholder="blur"
          />
        </div>
        <div>
          <H1>About Me</H1>
          <Text>
            Hi! I'm Ben, a third year Computer Science student at the University of York, currently
            working on placement at <TextLink to="https://arm.com">Arm</TextLink>.
          </Text>
          <Text>
            I'm mainly interested in frontend development at the moment and spend a lot of my time
            on different React projects. I love the concept of creating something that other people
            find <i>genuinely</i> useful (especially if they're people I don't know!) and the
            process behind new projects, all the way from having an idea, to designing it, to
            developing it and hosting it for other people to use is so much fun!
          </Text>
          <Text>
            <b>Outside of my studies</b>, I usually spend my time{" "}
            <TextLink to="https://github.com/benslv">programming</TextLink>,{" "}
            <TextLink to="https://goodreads.com/benslv">reading</TextLink> or playing in the
            University Jazz and Concert Bands! I also enjoy playing{" "}
            <TextLink to="https://www.trackmania.com/">Trackmania</TextLink> too!
          </Text>
        </div>
      </Container>
    </Layout>
  );
};

export default AboutPage;
