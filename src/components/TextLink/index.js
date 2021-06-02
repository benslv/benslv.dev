import styled from "styled-components";

import { Sidenote } from "../Sidenote";
import { UnstyledLink } from "../UnstyledLink";

export const TextLink = styled(UnstyledLink)`
  text-decoration: none;
  color: var(--color-accent);
  font-weight: 500;
  border-bottom: 2px solid var(--color-accent-20);
  transition: color 0.175s var(--easing), border 0.175s var(--easing);

  width: max-content;

  &:hover {
    color: var(--color-heading);
    border-bottom: 2px solid var(--color-heading);
  }

  ${Sidenote} & {
    color: var(--color-heading);
    border-bottom: 2px solid var(--color-heading);

    &:hover {
      color: var(--color-accent);
      border-bottom: 2px solid var(--color-accent-20);
    }
  }

  ${Sidenote}.warn & {
    color: var(--color-heading);
    border-bottom: 2px solid var(--color-heading);

    &:hover {
      color: var(--color-warn);
      border-bottom: 2px solid var(--color-warn-20);
    }
  }

  ${Sidenote}.error & {
    color: var(--color-heading);
    border-bottom: 2px solid var(--color-heading);

    &:hover {
      color: var(--color-error);
      border-bottom: 2px solid var(--color-error-20);
    }
  }
`;
