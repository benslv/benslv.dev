import React from "react";
import { GetStaticProps } from "next";

import { styled } from "../stitches.config";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { H1 } from "../components/Heading";
import { ProjectCard } from "../components/ProjectCard";

import { getProjectData, Project } from "../lib/projects";

const ProjectStack = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",

  margin: "0 calc(-1 * $2)",

  "@sm": {
    margin: 0,
  },
});

const ProjectPage = ({ allProjectData }: { allProjectData: Project[] }): JSX.Element => {
  return (
    <Layout title="My Work">
      <Container>
        <H1>Projects</H1>
        <ProjectStack>
          {allProjectData.map((project, i) => (
            <ProjectCard {...project} key={i} />
          ))}
        </ProjectStack>
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
