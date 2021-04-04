export const color = {
  // accent: "#91BB79",
  // accent: "#93EC5F",
  accent: `hsl(${Math.floor(Math.random() * 360)}, 65%, 50%)`,
  text: "#646478",
  heading: "#1F1F2D",
  background: "#FFFFFF",
  lightGrey: "#F6F6F9",
};

export const font = {
  size: { base: "18px", medium: "24px", large: "48px" },
  family: {
    sans: "Rubik, Inter, Helvetica, Arial, sans-serif",
  },
  weight: { normal: "400", semibold: "600", bold: "700" },
};

export const breakpoint = {
  md: "@media (min-width: 640px)",
  lg: "@media (min-width: 1280px)",
};
