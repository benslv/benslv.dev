import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Card } from "../../Card";

import { ProjectImage, ProjectInfo, ProjectTitle, Project, ProjectTags, Wrapper } from "./styles";

export const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            description
            tags
            link
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
  `);

  const projects = data.allProjectsJson.edges;

  return (
    <Wrapper>
      {projects &&
        projects.map(({ node: { title, description, image, link, tags, id } }) => (
          <Project key={id}>
            <ProjectInfo>
              <ProjectTitle to={link}>{title}</ProjectTitle>
              <Card>
                <p>{description}</p>
              </Card>
              <ProjectTags>{tags.join(" ")}</ProjectTags>
            </ProjectInfo>
            <ProjectImage>
              <GatsbyImage image={getImage(image)} alt={description} />
            </ProjectImage>
          </Project>
        ))}
    </Wrapper>
  );
};
