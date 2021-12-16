import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";
import { styled } from "stitches.config";

import { blueBox } from "components";

const ToggleButton = styled("button", {
  display: "flex",

  fontSize: "$3",

  padding: "calc(0.5 * $0)",

  border: "none",

  transition: "transform 0.3s cubic-bezier(.51,.28,0,1.29)",

  variants: {
    state: {
      light: {
        transform: "rotate(180deg)",

        "&:hover": {
          cursor: "pointer",
          transform: "rotate(185deg)",
        },
      },
      dark: {
        transform: "rotate(0deg)",

        "&:hover": {
          cursor: "pointer",
          transform: "rotate(+5deg)",
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

  if (!isMounted) return null;

  return (
    <ToggleButton
      onClick={toggleTheme}
      className={blueBox()}
      state={resolvedTheme === "light" ? "light" : "dark"}>
      {resolvedTheme === "light" ? <BiSun /> : <BiMoon />}
    </ToggleButton>
  );
};
