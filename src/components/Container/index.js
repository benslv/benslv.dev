import styled from "styled-components";

export const Container = styled.main`
  --gap-width: 24px;

  display: grid;
  grid-template-columns: 1fr min(65ch, calc(100% - 2 * var(--gap-width))) 1fr;
  grid-column-gap: var(--gap-width);
  grid-row-gap: var(--font-size-lg);

  margin-bottom: calc(2 * var(--font-size-base));;

  & > * {
    grid-column: 2;
  }

  & > .full-bleed {
    grid-column: 1 / -1;
  }
`;

export const WideContainer = styled(Container)`
  grid-template-columns: 1fr min(1200px, calc(100% - 2 * var(--gap-width))) 1fr;
`;
