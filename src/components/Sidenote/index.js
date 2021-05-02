import styled from "styled-components";

export const Sidenote = styled.aside`
  padding: var(--font-size-base);
  margin-bottom: var(--font-size-base);
  border-radius: var(--border-radius);

  color: var(--color-text);
  background-color: var(--color-card-background);
  border: 1px solid var(--color-card-border);

  &.info {
    color: var(--color-accent);
    background-color: var(--color-accent-20);
    border: 1px solid var(--color-accent);

    box-shadow: 0 0 15px var(--color-accent-20);
  }

  &.warn {
    color: var(--color-warn);
    background-color: var(--color-warn-20);
    border: 1px solid var(--color-warn);

    box-shadow: 0 0 15px var(--color-warn-20);
  }
`;
