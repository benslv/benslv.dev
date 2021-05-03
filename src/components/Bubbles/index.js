import styled from "styled-components";

export const Item = styled.span`
  padding: calc(0.25 * var(--font-size-base)) calc(0.75 * var(--font-size-base));

  color: var(--color-text);
  background-color: var(--color-card-background);

  border: 1px solid var(--color-card-border);

  font-size: var(--font-size-base);
  font-weight: 400;

  border-radius: 25rem;

  transition: box-shadow 0.175s var(--easing), transform 0.175s var(--easing);

  &:hover {
    box-shadow: 0 0 10px hsl(${(props) => 50 * props.index}, 77%, 75%);
    transform: translateY(-5px);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  gap: calc(0.5 * var(--font-size-base));

  max-width: 100%;

  margin: 0 auto;
`;
