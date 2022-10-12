import React, { FC } from "react";
import { TbClipboardList as SummaryIcon } from "react-icons/tb";

import "twin.macro";

interface DataPropsType {
	jumlah_dosen: number;
	jumlah_mhs: number;
	jumlah_pt: number;
	jumlah_prodi: number;
}

interface StatisticsPropsType {
	data: DataPropsType;
}

const Statistics: FC<StatisticsPropsType> = (props) => {
	const { data } = props;
	return (
		<div tw="mb-8">
			<div tw="flex font-medium text-base px-1 items-center">
				<SummaryIcon size="22" tw="mr-1 align-middle" />
				<span tw="mt-1"> Statistik</span>
			</div>
			<div tw="mt-3">
				<ul>
					<li>
						Total Dosen: <span tw="text-blue-600">{data?.jumlah_dosen}</span>
					</li>
					<li>
						Total Mahasiswa: <span tw="text-blue-600">{data?.jumlah_mhs}</span>
					</li>
					<li>
						Total Perguruan Tinggi:{" "}
						<span tw="text-blue-600">{data?.jumlah_pt}</span>
					</li>
					<li>
						Total Prodi: <span tw="text-blue-600">{data?.jumlah_prodi}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Statistics;
