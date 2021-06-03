import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

import { UnstyledLink } from "../../UnstyledLink";

import { media } from "../../../theme/mixins";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--font-size-base));
`;

const Project = styled.article`
  position: relative;
  height: 150px;
  overflow: hidden;
  border-radius: 10px;

  box-shadow: var(--box-shadow-light);

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(-150deg, rgba(0, 0, 0, 0) 0%, hsla(0, 0%, 0%, 0.6) 100%);
    opacity: 1;

    backdrop-filter: blur(2px);

    transition: opacity 0.5s ease;

    ${media("sm")} {
      opacity: 0;
    }
  }

  &:hover:after {
    opacity: 1;
  }
`;

const Title = styled.h2`
  color: white;
`;

const Body = styled.div`
  position: absolute;
  z-index: 1;
  padding: calc(2 * var(--font-size-base));
  color: white;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-shadow: 0 0 35px black;

  opacity: 1;
  transform: translateY(0);

  ${media("sm")} {
    opacity: 0;
    transform: translateY(10px);
  }

  font-size: var(--font-size-md);

  transition: opacity 0.25s var(--easing), transform 0.25s var(--easing);

  ${Project}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___title, order: ASC }
      ) {
        edges {
          node {
            id
            frontmatter {
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
    }
  `);

  const projects = data.allMdx.edges;

  return (
    <Wrapper>
      {projects &&
        projects.map(({ node: { id, frontmatter: { title, description, tags, link, image } } }) => (
          <UnstyledLink key={id} to={link}>
            <Project>
              <Body>
                <Title>{title}</Title>
                <p>{description}</p>
              </Body>
              <GatsbyImage image={getImage(image)} alt={description} />
            </Project>
          </UnstyledLink>
        ))}
    </Wrapper>
  );
};
