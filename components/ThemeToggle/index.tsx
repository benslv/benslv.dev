import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunLight, HalfMoon, QuestionMark } from "iconoir-react";
import { styled } from "~/stitches.config";

import { blueBox } from "../BlueBox";

const ToggleButton = styled("button", {
  display: "flex",

  fontSize: "$3",

  padding: "calc(0.5 * $0)",

  border: "none",

  transition: "transform 0.3s cubic-bezier(.51,.28,0,1.29), background-color $ease",

  "&:hover": {
    backgroundColor: "$blue5",
  },

  variants: {
    state: {
      light: {
        "@lg": {
          "&:hover": {
            cursor: "pointer",
            transform: "rotate(5deg)",
          },
        },
      },
      dark: {
        "@lg": {
          "&:hover": {
            cursor: "pointer",
            transform: "rotate(5deg)",
          },
        },
      },
    },
  },
});

export const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setIsMounted(true), []);

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";

    setTheme(targetTheme);
  };

  if (!isMounted) {
    return (
      <ToggleButton className={blueBox()}>
        <QuestionMark />
      </ToggleButton>
    );
  }

  return (
    <ToggleButton
      onClick={toggleTheme}
      className={blueBox()}
      state={resolvedTheme === "light" ? "light" : "dark"}
      aria-label={`Toggle website to ${resolvedTheme === "light" ? "dark" : "light"} theme.`}>
      {resolvedTheme === "light" ? <SunLight /> : <HalfMoon />}
    </ToggleButton>
  );
};
