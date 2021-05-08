import styled from "styled-components";

export const Sidenote = styled.aside`
  padding: var(--font-size-base);
  margin: calc(2 * var(--font-size-base)) 0;
  border-radius: var(--border-radius);

  color: var(--color-text);
  background-color: var(--color-card-background);
  border: 1px solid var(--color-card-border);

  &.info {
    color: var(--color-heading);
    background-color: var(--color-accent-20);

    border: none;
    border-left: 5px solid var(--color-accent);

    box-shadow: 0 0 15px var(--color-accent-20);
  }

  &.warn {
    color: var(--color-heading);
    background-color: var(--color-warn-20);

    border: 0;
    border-left: 5px solid var(--color-warn);

    box-shadow: 0 0 15px var(--color-warn-20);
  }

  &.error {
    color: var(--color-heading);
    background-color: var(--color-error-20);

    border: 0;
    border-left: 5px solid var(--color-error);

    box-shadow: 0 0 15px var(--color-error-20);
  }
`;
