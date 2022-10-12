import React, { FC } from "react";
import Router from "next/router";
import { styled } from "twin.macro";

interface HeaderPropsType {
	title?: string;
	isTitleClickAble?: boolean;
	isBackButton?: boolean;
}

const Header: FC<HeaderPropsType> = (props) => {
	const { title, isTitleClickAble, isBackButton } = props;

	const handleRoute = (url: string) => Router.push(url);

	return (
		<StyledHeader>
			<div tw="flex items-center cursor-pointer w-full justify-between">
				<div>
					<div
						onClick={() => (isTitleClickAble ? handleRoute("/") : "")}
						tw="cursor-pointer"
					>
						{/* <Image
							src="/images/logo/logo-dark.png"
							alt="logo"
							width={100}
							height={28}
						/> */}
						<div tw="mb-0 text-xl font-medium text-[#2980b9]">{title}</div>
					</div>
				</div>
				<div></div>
			</div>
		</StyledHeader>
	);
};

export default Header;

const StyledHeader = styled.div`
	position: sticky;
	top: 0;
	background-color: #ffffff;
	width: 100%;
	height: 60px;
	z-index: 9;
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	box-shadow: rgb(0 0 0 / 15%) 0px 2px 8px;
`;
