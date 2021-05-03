import React from "react";

const baseURL = "https://emojicdn.elk.sh";

export const Emoji = ({ emoji, style, size }) => {
  let url = `${baseURL}/${emoji}`;

  if (style) {
    url += `?style=${style}`;
  }

  return <img src={url} draggable="false" alt={emoji} style={{ maxHeight: size || "1em" }} />;
};
