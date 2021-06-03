import { css } from "styled-components";

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1280px",
};

export const blueBox = css`
  color: var(--color-accent);

  background-color: var(--color-accent-20);

  padding: calc(0.5 * var(--font-size-base)) var(--font-size-base);
  border-radius: var(--border-radius);

  box-shadow: var(--box-shadow-light);
`;

export const media = (size = "sm") => `@media screen and (min-width: ${breakpoints[size]})`;
