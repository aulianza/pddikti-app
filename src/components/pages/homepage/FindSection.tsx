import React, { FC } from "react";
import Router from "next/router";
import Image from "next/image";
import { Avatar } from "antd";
import { BiSearchAlt as SearchIcon } from "react-icons/bi";
import "twin.macro";

import Card from "@/components/shared/Card";

interface CategoryProps {
	title: string;
	description: string;
	icon: string;
	url: string;
}

interface FindSectionPropsType {
	category: CategoryProps[];
}

const FindSection: FC<FindSectionPropsType> = (props) => {
	const { category } = props;

	const handleSelectCategory = (url: string) => Router.push(url);

	return (
		<div tw="mb-5">
			<div tw="flex font-medium text-base px-1 items-center">
				<SearchIcon size="22" tw="mr-1 align-middle" />
				<span tw="mt-1"> Cari Data</span>
			</div>
			{category.map((item: any, index: number) => (
				<Card
					key={index}
					borderColor={item.color}
					textColor={item.color}
					transition
					clickable
					onClick={() => handleSelectCategory(item.url)}
				>
					<div tw="flex items-center w-full gap-3 px-1">
						<div tw="w-auto">
							<Avatar
								size={45}
								src={
									<Image
										src={item?.icon}
										alt={item?.title}
										width={50}
										height={50}
										tw="text-white"
									/>
								}
							/>
						</div>
						<div tw="w-full">
							<div tw="mt-1 font-semibold">{item?.title}</div>
							<p tw="my-0 text-[13px]  text-gray-500">{item?.description}</p>
						</div>
					</div>
				</Card>
			))}
		</div>
	);
};

export default FindSection;
