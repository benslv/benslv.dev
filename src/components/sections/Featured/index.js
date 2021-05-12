import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--font-size-base));
`;

const Project = styled.article`
  position: relative;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    z-index: 0;
  }
`;

const Title = styled.h2`
  color: white;
`;

const Body = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  padding: calc(2 * var(--font-size-base));
  color: white;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  opacity: 0;
  transform: translateY(50px);

  transition: opacity 0.25s var(--easing), transform 0.25s var(--easing);

  ${Project}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
        projects.map(({ node: { id, title, description, tags, link, image } }) => (
          <Project key={id}>
            <Body>
              <Title>{title}</Title>
              <p>{description}</p>
            </Body>
            <GatsbyImage image={getImage(image)} alt={description} />
          </Project>
        ))}
    </Wrapper>
  );
};
