import React from "react";
import { styled } from "twin.macro";

const Layout = (props: any) => {
	const { children } = props;

	return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.div`
	max-width: 480px;
	margin: 0px auto;
	background-color: #fff;
	@media (min-width: 481px) {
		min-height: 100vh;
		box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;
	}
`;
