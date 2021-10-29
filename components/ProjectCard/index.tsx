import React from "react";
import Image from "next/image";

import { css, styled } from "../../stitches.config";

const Project = styled("article", {
  position: "relative",
  height: 150,
  overflow: "hidden",
  borderRadius: "$2",

  boxShadow: "$light",

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

    "@sm": {
      opacity: 0,
    },
  },
});

const Body = styled("div", {
  position: "absolute",

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

  zIndex: 1,

  transition: "opacity $easeSlower, transform $easeSlower",

  "@sm": {
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

export const ProjectCard = ({ title, description, tags, link, image }) => {
  return (
    <Project>
      <Body>
        <Title>{title}</Title>
        <p>{description}</p>
      </Body>
      <Image src={image} layout="fill" alt="" className={cardImage()} />
    </Project>
  );
};
