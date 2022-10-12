import React, { FC } from "react";
import { Avatar } from "antd";
import { FiChevronLeft as BackIcon } from "react-icons/fi";
import { styled } from "twin.macro";
import Router from "next/router";

interface PageHeaderPropsType {
	title?: string;
	backUrl?: string;
}

const PageHeader: FC<PageHeaderPropsType> = (props) => {
	const { title, backUrl } = props;

	return (
		<StyledHead>
			<StyledBack
				onClick={() => Router.push("/")}
				tw="mr-3"
				style={{ color: "#2980b9", backgroundColor: "#fff" }}
			>
				<BackIcon size="22" tw="mt-1" style={{ marginRight: "1px" }} />
			</StyledBack>
			<div tw="text-base text-[#2980b9]">
				<span tw="text-base">{title}</span>
			</div>
		</StyledHead>
	);
};

export default PageHeader;

const StyledHead = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	align-items: center;
	width: 100%;
`;

const StyledBack = styled(Avatar)`
	box-shadow: rgb(0 0 0 / 15%) 0px 2px 8px;
	cursor: pointer;
`;
