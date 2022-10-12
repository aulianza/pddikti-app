import React, { FC } from "react";
import { FiChevronLeft as BackIcon } from "react-icons/fi";
import { useRouter } from "next/router";
import { styled } from "twin.macro";

interface PageHeaderPropsType {
	title: string;
	backUrl?: string;
}

const PageHeader: FC<PageHeaderPropsType> = (props) => {
	const { title, backUrl } = props;
	const route = useRouter();

	return (
		<StyledHeader>
			<div tw="flex items-center w-full justify-between">
				<div>
					<div tw="flex items-center">
						{backUrl && (
							<BackIcon
								size="22"
								tw="mr-3 cursor-pointer "
								onClick={() => route.push(backUrl)}
							/>
						)}
						<div tw="mb-0 text-lg font-medium">{title}</div>
					</div>
				</div>
			</div>
		</StyledHeader>
	);
};

export default PageHeader;

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
