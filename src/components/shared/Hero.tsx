import React, { FC } from "react";
import { styled } from "twin.macro";

interface HeroPropsType {
	children?: React.ReactNode;
	top?: string;
	height?: string;
	bgColor?: string;
	isResponsive?: boolean;
}

const Hero: FC<HeroPropsType> = (props) => {
	const { children, top, height, bgColor, isResponsive } = props;

	return (
		<StyledHero
			top={top}
			height={height}
			bgColor={bgColor}
			isResponsive={isResponsive}
		>
			{children}
		</StyledHero>
	);
};

export default Hero;

const StyledHero = styled.div<HeroPropsType>`
	z-index: 1;
	position: sticky;
	top: ${(props) => (props.top ? props.top : "60px")};
	background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
	height: ${(props) => (props.height ? `${props.height}px` : "160px")};
	margin-bottom: 20px;

	${({ isResponsive }) =>
		!isResponsive &&
		`
			@media (max-width: 320px) {
				height: 135px;
			}

			@media (min-width: 321px) and (max-width: 360px) {
				height: 150px;
			}

			@media (min-width: 361px) and (max-width: 375px) {
				height: 155px;
			}

			@media (min-width: 391px) and (max-width: 409px) {
				height: 165px;
			}

			@media (min-width: 410px) and (max-width: 427px) {
				height: 170px;
			}

			@media (min-width: 428px) and (max-width: 480px) {
				height: 175px;
			}

			@media (min-width: 481px) {
				height: 195px;
			}

	`}
`;
