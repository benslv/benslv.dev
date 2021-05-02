import styled from "styled-components";

export const Container = styled.main`
	display: grid;
	grid-template-columns: 1fr min(65ch, calc(100% - 64px)) 1fr;
	grid-column-gap: 32px;

	& > * {
		grid-column: 2;
	}

	& > .full-bleed {
		grid-column: 1 / -1;
	}
`;
