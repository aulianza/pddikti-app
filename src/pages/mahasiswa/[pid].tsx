import React from "react";
import Head from "next/head";
import moment from "moment";
import { BiUser as UserIcon } from "react-icons/bi";
import { styled } from "twin.macro";
import "moment/locale/id";

import PageHeader from "@/components/layouts/partials/PageHeader";
import Card from "@/components/shared/Card";
import Container from "@/components/shared/Container";

import { getMahasiswaDetail } from "@/services/api";
import { toCamelCase } from "@/helpers/index";

const StudentDetail = (props: any) => {
	const { data } = props;

	const dataUmum = data?.data?.dataumum;
	const dataProdi = data?.data?.dataprodi;
	const dataStatus = data?.data?.datastatuskuliah;

	return (
		<>
			<Head>
				<title>Detail Mahasiswa</title>
			</Head>
			<PageHeader title="Data Mahasiswa" backUrl="/mahasiswa" />
			<Container>
				<Card tw="mt-1">
					<div tw="flex justify-between items-center">
						<div tw="flex">
							<UserIcon size="20" tw="mr-2" />
							<div>Biodata Mahasiswa</div>
						</div>
					</div>
					<StyledBreak />
					<div tw="flex flex-wrap p-1">
						<StyledItem fullWidth>
							<label tw="text-gray-500">Nama Mahasiswa</label>
							<span>{toCamelCase(dataUmum?.nm_pd)}</span>
						</StyledItem>
						<StyledItem fullWidth>
							<label tw="text-gray-500">Jenis Kelamin</label>
							<span>{dataUmum?.jk === "L" ? "Laki-laki" : "Perempuan"}</span>
						</StyledItem>
						<StyledItem fullWidth>
							<label tw="text-gray-500">Nomor Induk Mahasiswa</label>
							<span>{dataUmum?.nipd}</span>
						</StyledItem>
						<StyledItem fullWidth>
							<label tw="text-gray-500">Program Studi</label>
							<span>{dataUmum?.namaprodi}</span>
						</StyledItem>
						<StyledItem fullWidth>
							<label tw="text-gray-500">Perguruan Tinggi</label>
							<span>{dataUmum?.namapt}</span>
						</StyledItem>
						<StyledItem fullWidth>
							<label tw="text-gray-500">Jenjang Pendidikan</label>
							<span>{dataUmum?.namajenjang}</span>
						</StyledItem>
						<StyledItem fullWidth>
							<label tw="text-gray-500">Tahun Masuk</label>
							<span>{dataUmum?.mulai_smt.slice(0, -1)}</span>
						</StyledItem>
						<StyledItem tw="mb-0" fullWidth>
							<label tw="text-gray-500">Status Mahasiswa</label>
							<span>{dataUmum?.ket_keluar || "Belum Lulus"}</span>
						</StyledItem>
						{dataUmum?.no_seri_ijazah && (
							<StyledItem fullWidth tw="mb-0 mt-4">
								<label tw="text-gray-500">Nomor Ijazah</label>
								<span>{dataUmum?.no_seri_ijazah}</span>
							</StyledItem>
						)}
						{dataUmum?.tgl_keluar && (
							<StyledItem fullWidth tw="mb-0 mt-4">
								<label tw="text-gray-500">Tanggal Lulus</label>
								<span>
									{moment(dataUmum?.tgl_keluar).format("Do MMMM YYYY")}
								</span>
							</StyledItem>
						)}
					</div>
				</Card>
			</Container>
		</>
	);
};

export default StudentDetail;

type StyledItemProps = {
	fullWidth?: boolean;
};

const StyledItem = styled.div<StyledItemProps>`
	width: ${(props) => (props.fullWidth ? "100%" : "50%")};
	margin-bottom: 15px;
	font-size: 14px;

	> label {
		display: block;
	}
`;

const StyledBreak = styled.div`
	border-top: 2px solid #eeeeee;
	margin: 10px 0;
`;

export async function getServerSideProps(ctx: any) {
	const { params } = ctx;
	const { pid } = params;
	const responseData = await getMahasiswaDetail(pid);

	return {
		props: {
			data: responseData,
		},
	};
}
