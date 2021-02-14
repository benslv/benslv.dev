import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	max-width: 720px;
	margin: 0 auto;

  display: flex;
  flex-direction: column;
  flex-grow: 0;
`;

const Container = ({ children }) => (
	<StyledContainer>{children}</StyledContainer>
);

export default Container;
