import React from "react";
import Image from "next/image";
import { css, styled } from "~/stitches.config";

import { UnstyledLink } from "../UnstyledLink";

import { Project as ProjectType } from "~/lib/projects";

const Project = styled("article", {
  position: "relative",
  minHeight: 150,
  borderRadius: 0,
  overflow: "hidden",

  boxShadow: "$light",

  "@sm": {
    borderRadius: "$2",
  },

  "&:after": {
    content: "",

    position: "absolute",
    top: 0,
    left: 0,

    width: "100%",
    height: "100%",

    background: "linear-gradient(-150deg, rgba(0, 0, 0, 0) 0%, hsla(0, 0%, 0%, 0.6) 100%)",
    opacity: 1,
    backdropFilter: "blur(2px)",

    transition: "opacity $easeSlower",

    "@md": {
      opacity: 0,
    },
  },

  "&:hover:after": {
    opacity: 1,
  },
});

const Body = styled("div", {
  position: "relative",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  padding: "calc(2 * $1)",

  fontSize: "$2",
  color: "white",
  textShadow: "0 0 35px black",

  opacity: 1,
  transform: "translateY(0)",

  height: "100%",
  width: "100%",

  zIndex: 1,

  transition: "opacity $easeSlower, transform $easeSlower",

  "@md": {
    opacity: 0,
    transform: "translateY(10px)",
  },

  [`${Project}:hover &`]: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const Title = styled("h2", {
  color: "white",
});

const cardImage = css({
  objectFit: "cover",
  objectPosition: "top",
});

const ProjectLink = styled(UnstyledLink, {
  textDecoration: "none",
});

export const ProjectCard = ({
  title,
  description,
  link,
  image,
  blurhash,
}: ProjectType): JSX.Element => {
  return (
    <Project>
      <ProjectLink to={link}>
        <Body>
          <Title>{title}</Title>
          <p>{description}</p>
        </Body>
      </ProjectLink>
      <Image
        src={image}
        layout="fill"
        alt=""
        className={cardImage()}
        placeholder="blur"
        blurDataURL={blurhash}
      />
    </Project>
  );
};
