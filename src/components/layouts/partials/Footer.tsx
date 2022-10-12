import React from "react";
import "twin.macro";

const Footer = () => {
	return (
		<div tw="text-center fixed left-0 bottom-0 w-full mb-10">
			<div tw="text-gray-400 text-xs">
				Versi 1.0 Beta. Developed by{" "}
				<a href="https://aulianza.id" target="_blank" rel="noreferrer">
					aulianza
				</a>
			</div>
		</div>
	);
};

export default Footer;
