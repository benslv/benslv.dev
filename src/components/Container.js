import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
