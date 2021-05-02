import React from "react";

const URL = "http://emojicdn.elk.sh";

export const Emoji = ({ emoji }) => {
  return <img src={`${URL}/${emoji}`} draggable="false" alt={emoji} style={{ maxHeight: "1em" }} />;
};
