import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	max-width: 540px;
	margin: 0 auto;

  display: flex;
  flex-direction: column;
  flex-grow: 0;
  align-items: center;
`;

const Container = ({ children }) => (
	<StyledContainer>{children}</StyledContainer>
);

export default Container;
