import React from "react";

import { Layout } from "../components/Layout";
import { FeaturedProjects } from "../components/sections/Featured";

const ProjectsPage = () => {
  return (
    <Layout>
      <header>
        <h1>Projects</h1>
      </header>
      <FeaturedProjects />
      <section>
        <h2>All Projects</h2>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
