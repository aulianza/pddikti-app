import React, { ChangeEvent, useEffect, useState } from "react";
import Head from "next/head";
import { NextPage } from "next";

import { getMahasiswa } from "@/services/api";
import useDebounce from "@/hooks/useDebounce";
import MahasiswaBody from "@/components/pages/mahasiswa/MahasiswaBody";
import MahasiswaHeader from "@/components/pages/mahasiswa/MahasiswaHeader";

const StudentPage: NextPage = () => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [value, setValue] = useState<string>("");
	const [data, setData] = useState<[]>([]);
	const [statusCode, setStatusCode] = useState();
	const debouncedValue = useDebounce<string>(value, 500);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const fetchStudent = async () => {
		const response = await getMahasiswa(value);
		const dataRes = response?.data || [];
		if (response) {
			setStatusCode(response?.code);
			setData(dataRes);
		}
	};

	useEffect(() => {
		fetchStudent();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedValue]);

	useEffect(() => {
		const styleElement = document.querySelector("body") as HTMLElement;
		styleElement.style.overflow = "scroll";
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<Head>
				<title>Cari Mahasiswa</title>
				<meta
					name="theme-color"
					content={scrollPosition >= 185 ? "#ffffff" : "#d5eeff"}
				/>
			</Head>
			<MahasiswaHeader handleChange={handleChange} />
			<MahasiswaBody
				statusCode={statusCode}
				data={data}
				scrollPosition={scrollPosition}
			/>
		</>
	);
};

export default StudentPage;
