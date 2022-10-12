import React, { FC } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

interface LottiePlayerPropsType {
	src: string;
	width?: string;
	height?: string;
}

const LottiePlayer: FC<LottiePlayerPropsType> = (props) => {
	const { src, width, height } = props;

	return (
		<Player
			autoplay
			loop
			src={src}
			style={{
				height: width || "350px",
				width: height || "350px",
				maxWidth: "100%",
			}}
		></Player>
	);
};

export default LottiePlayer;
