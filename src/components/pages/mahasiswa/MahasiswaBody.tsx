import React, { FC } from "react";
import Router from "next/router";
import { Avatar } from "antd";
import { BiUser as StudentIcon } from "react-icons/bi";
import { styled } from "twin.macro";

import Card from "@/components/shared/Card";
import LottiePlayer from "@/components/shared/LottiePlayer";
import { toCamelCase } from "@/helpers/index";

interface MahasiswaBodyPropsType {
	statusCode?: number;
	data: [];
	scrollPosition: any;
}

const MahasiswaBody: FC<MahasiswaBodyPropsType> = (props) => {
	const { statusCode, data, scrollPosition } = props;

	const handleViewDetail = (id: string) => Router.push("mahasiswa/" + id);

	return (
		<StyledRoundedTopContainer scrollPosition={scrollPosition}>
			{statusCode === 200 ? (
				<>
					{data.length ? (
						data.map((item: any, index: number) => (
							<Card
								key={index}
								transition
								clickable
								onClick={() => handleViewDetail(item?.id)}
							>
								<div tw="flex items-center gap-4">
									<Avatar size={40}>
										<StudentIcon size="28" tw="align-middle" />
									</Avatar>
									<div>
										<div tw="text-sm font-semibold ">
											{toCamelCase(item?.nama)}
										</div>
										<code tw="text-sm text-blue-400">{item?.nim}</code>
										<div tw="text-sm text-gray-500">
											{toCamelCase(item?.prodi)}
										</div>
										<div tw="text-sm">{toCamelCase(item?.kampus)}</div>
									</div>
								</div>
							</Card>
						))
					) : (
						<div tw="my-5 text-center">
							<LottiePlayer
								src={
									"https://assets7.lottiefiles.com/private_files/lf30_cgfdhxgx.json"
								}
								width="260px"
							/>
							<div tw="mx-8">
								<div tw="text-gray-500 mb-2">
									Cari mahasiswa di kolom pencarian
								</div>
								<span tw=" text-gray-400">
									Ketik nama atau nim, atau kamu juga bisa kombinasikan nama dan
									prodi atau nama dan kampus
								</span>
							</div>
						</div>
					)}
				</>
			) : (
				<div tw="my-5 text-center">
					<LottiePlayer
						src={"https://assets5.lottiefiles.com/packages/lf20_rc6CDU.json"}
					/>
					<div tw="mx-8">
						<div tw="text-gray-500 mb-2">Data tidak ditemukan</div>
						<span tw=" text-gray-400">
							Coba kombinasikan nama dan prodi atau nama dan kampus
						</span>
					</div>
				</div>
			)}
		</StyledRoundedTopContainer>
	);
};

export default MahasiswaBody;

type StyledRoundedTopContainerType = {
	scrollPosition: number;
};

const StyledRoundedTopContainer = styled.div<StyledRoundedTopContainerType>`
	z-index: 3;
	position: relative;
	background-color: #fff;
	padding: 0.5rem 1rem 2rem;
	margin-top: -40px;
	margin-bottom: 1rem;
	height: auto;
	border-top-left-radius: ${(props) =>
		props.scrollPosition >= 185 ? 0 : "1.2rem"};
	border-top-right-radius: ${(props) =>
		props.scrollPosition >= 185 ? 0 : "1.2rem"};
`;
