import React from "react";
import { styled } from "twin.macro";

const Topbar = (props: any) => {
	const { children } = props;

	return <StyledTopbar>{children}</StyledTopbar>;
};

export default Topbar;

const StyledTopbar = styled.div`
	background-color: #ffffff;
	width: 100%;
	height: 65px;
	z-index: 2;
	display: flex;
	align-items: center;
	padding: 0.5rem;
`;
