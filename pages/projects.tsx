import React from "react";
import { GetStaticProps } from "next";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { H1 } from "../components/Heading";
import { ProjectCard } from "../components/ProjectCard";

import { getProjectData, Project } from "../lib/projects";

const ProjectPage = ({ allProjectData }: { allProjectData: Project[] }): JSX.Element => {
  return (
    <Layout title="My Work">
      <Container>
        <H1>Projects</H1>
        <div>
          {allProjectData.map((project, i) => (
            <ProjectCard {...project} key={i} />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = () => {
  const allProjectData = getProjectData();

  return {
    props: {
      allProjectData,
    },
  };
};
