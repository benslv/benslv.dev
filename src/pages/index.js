import React from "react";

import { Layout } from "../components/Layout";
import { Sidenote } from "../components/Sidenote";
import { TextLink } from "../components/TextLink";
import { Emoji } from "../components/Emoji";
import * as Bubbles from "../components/Bubbles";

const skills = [
  "JavaScript (ES6)",
  "React",
  "Svelte",
  "Gatsby",
  "Express",
  "TinyHTTP",
  "Axios",
  "Needle",
  "Preact",
  "Python",
  "Java",
  "HTML",
  "CSS",
  "Docker",
  "Bash",
  "Photoshop",
  "Figma",
];

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <h1>
          <Emoji emoji="👋" /> Hi, I'm Ben!
        </h1>
        <p>
          I’m a third-year Computer Science student at the University of York, currently on
          placement at Arm.
        </p>
      </section>
      <section>
        <h2>About Me</h2>
        <p>
          Hi! I'm Ben, a third year Computer Science student at the University of York. I built this
          website to showcase the work I've been doing recently and to keep my skills web
          development skills warm.
        </p>
        <p>
          Outside of my studies, I usually spend my time programming, reading or playing in the
          University Jazz and Concert bands!
        </p>
        {skills && (
          <>
            <h3>Skills</h3>
            <Bubbles.Container>
              {skills.map((skill, i) => (
                <Bubbles.Item key={i} index={i}>
                  {skill}
                </Bubbles.Item>
              ))}
            </Bubbles.Container>
          </>
        )}
      </section>
      <section>
        <h2>This Website</h2>
        <p>
          I'm currently in the process of building a new website for myself, so consider this a kind
          of showcase and holding page for now.
        </p>
        <Sidenote>This is what a normal aside will look like.</Sidenote>
        <Sidenote className="info">This is what an "info" aside looks like.</Sidenote>
        <Sidenote className="warn">This is what a "warning" aside looks like.</Sidenote>
        <Sidenote>
          This is what an aside looks like with a <TextLink to="/posts">link</TextLink> inside it.
        </Sidenote>
        <Sidenote className="info">
          This is what an aside looks like with a <TextLink to="/posts">link</TextLink> inside it.
        </Sidenote>
        <Sidenote className="warn">
          This is what an aside looks like with a <TextLink to="/posts">link</TextLink> inside it.
        </Sidenote>
        <p>
          If you'd like to get in touch, please send me a DM on{" "}
          <TextLink to="https://twitter.com/bensilverman_">Twitter</TextLink>!
        </p>
      </section>
    </Layout>
  );
};

export default IndexPage;
