import React, { FC } from "react";
import { Input } from "antd";
import { styled } from "twin.macro";

import Container from "@/components/shared/Container";
import Hero from "@/components/shared/Hero";
import PageHeader from "@/components/shared/PageHeader";

interface MahasiswaHeaderPropsType {
	handleChange?: any;
}

const MahasiswaHeader: FC<MahasiswaHeaderPropsType> = (props) => {
	const { handleChange } = props;

	return (
		<Hero top="0" height="170" bgColor="#d5eeff" isResponsive>
			<PageHeader title="Cari Mahasiswa" />
			<Container tw="pt-3">
				<StyledInput
					placeholder="Ketik nama mahasiswa atau NIM..."
					onChange={handleChange}
					allowClear
				/>
			</Container>
		</Hero>
	);
};

export default MahasiswaHeader;

const StyledInput = styled(Input)`
	border-radius: 8px;
	padding: 8px 15px;
`;
