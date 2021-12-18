import React from "react";

const baseURL = "https://emojicdn.elk.sh";

type EmojiProps = {
  emoji: string;
  style?:
    | "apple"
    | "google"
    | "microsoft"
    | "samsung"
    | "whatsapp"
    | "twitter"
    | "facebook"
    | "messenger"
    | "joypixels"
    | "openmoji"
    | "emojidex"
    | "lg"
    | "htc"
    | "mozilla";
  size?: string;
};

export const Emoji = ({ emoji, style = "apple", size = "1em" }: EmojiProps): JSX.Element => {
  const URL = `${baseURL}/${emoji}?style=${style}`;

  return (
    <img src={URL} draggable="false" alt={emoji || ""} style={{ maxHeight: size }} height={size} />
  );
};
