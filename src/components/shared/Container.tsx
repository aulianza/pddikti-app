import React from "react";
import "twin.macro";

interface ContainerPropsType {
	children?: React.ReactNode;
	others?: any;
}

const Container = (props: ContainerPropsType) => {
	const { children, ...others } = props;

	return (
		<div tw="p-4" {...others}>
			{children}
		</div>
	);
};

export default Container;
