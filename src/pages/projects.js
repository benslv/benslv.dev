import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Layout } from "../components/Layout";

const ProjectsPage = ({ data }) => {
  const projects = data.allProjectsJson.edges;

  return (
    <Layout>
      <header>
        <h1>Projects</h1>
      </header>
      <section>
        <h2>Featured</h2>
        <p>I'm especially proud of these ones!</p>
        {projects &&
          projects.map(({ node: { title, description, image, id } }) => (
            <div key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <GatsbyImage image={getImage(image)} alt={description} />
            </div>
          ))}
      </section>
      <section>
        <h2>All Projects</h2>
      </section>
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  {
    allProjectsJson {
      edges {
        node {
          id
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 750
                height: 400
                quality: 100
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
