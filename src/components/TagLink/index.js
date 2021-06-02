import styled from "styled-components";

import { UnstyledLink } from "../UnstyledLink";

export const TagLink = styled(UnstyledLink).attrs(({ tag }) => ({
  to: `/tags/${tag}`,
  children: tag,
}))`
  transition: color 0.15s var(--easing);

  &:hover {
    color: var(--color-heading);
  }
`;
