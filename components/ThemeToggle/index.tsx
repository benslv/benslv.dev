import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setIsMounted(true), []);

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";

    setTheme(targetTheme);
  };

  return <button onClick={toggleTheme}>Switch theme</button>;
};
