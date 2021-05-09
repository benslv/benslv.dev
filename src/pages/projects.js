import React from "react";

import { WideContainer} from "../components/Container";
import { Layout } from "../components/Layout";
import { FeaturedProjects } from "../components/sections/Featured";

const ProjectsPage = () => {
  return (
    <Layout>
      <WideContainer>
        <header>
          <h1>Projects</h1>
        </header>
        <FeaturedProjects />
        <section>
          <h2>All Projects</h2>
        </section>
      </WideContainer>
    </Layout>
  );
};

export default ProjectsPage;
