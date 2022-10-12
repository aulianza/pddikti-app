import React, { FC } from "react";
import { css, styled } from "twin.macro";

interface CardPropsType {
	children?: React.ReactNode;
	transition?: boolean;
	clickable?: boolean;
	minHeight?: string;
	maxHeight?: string;
	bgColor?: string;
	borderColor?: string;
	textColor?: string;
	others?: any;
	onClick?: () => void;
}

const Card: FC<CardPropsType> = (props) => {
	const {
		children,
		transition,
		clickable,
		minHeight,
		maxHeight,
		bgColor,
		borderColor,
		textColor,
		...others
	} = props;

	return (
		<StyledCard
			minHeight={minHeight}
			maxHeight={maxHeight}
			transition={transition}
			clickable={clickable}
			bgColor={bgColor}
			borderColor={borderColor}
			textColor={textColor}
			{...others}
		>
			{children}
		</StyledCard>
	);
};

export default Card;

type StyledProps = {
	bgColor?: string;
	textColor?: string;
	borderColor?: string;
	minHeight?: string;
	maxHeight?: string;
	clickable?: boolean;
	transition?: boolean;
};

const StyledCard = styled.div<StyledProps>`
	background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
	padding: 1rem;
	margin: 1rem 0;
	box-shadow: rgb(0 0 0 / 15%) 0px 1px 6px 0px;
	border-radius: 10px;

	min-height: ${(props) => (props.minHeight ? props.minHeight : "unset")};
	max-height: ${(props) => (props.maxHeight ? props.maxHeight : "unset")};
	color: ${(props) => (props.textColor ? props.textColor : "unset")};
	border: ${(props) =>
		props.borderColor ? `1px solid ${props.borderColor}` : "unset"};

	${({ clickable }) =>
		clickable &&
		css`
			cursor: pointer;
		`}

	${({ transition }) =>
		transition &&
		css`
			transition: all 250ms ease;
			will-change: transition;
			transform: translateY(0px);

			&:hover {
				box-shadow: 0 3px 16px 0 rgb(0 0 0 / 10%);
				transform: translateY(-1px);
			}
		`}
`;
