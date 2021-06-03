import React from "react";

import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { TextLink } from "../components/TextLink";
import { FeaturedProjects } from "../components/sections/FeaturedProjects";

const ProjectsPage = () => {
  return (
    <Layout>
      <Container>
        <header>
          <h1>Projects</h1>
        </header>
        <FeaturedProjects />
        <section>
          <h2>Other Stuff</h2>
          <p>
            I host all of my projects over on{" "}
            <TextLink to="https://github.com/benslv">GitHub</TextLink>, so check that out if
            you&apos;re interested to see what else I&apos;ve worked on!
          </p>
        </section>
      </Container>
    </Layout>
  );
};

export default ProjectsPage;