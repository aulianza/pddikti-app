import type { NextPage } from "next";
import "twin.macro";

import FindSection from "@/components/pages/homepage/FindSection";
import Footer from "@/components/layouts/partials/Footer";
import Statistics from "@/components/pages/homepage/Statistics";
import Header from "@/components/layouts/partials/Header";
import Container from "@/components/shared/Container";
import { CATEGORY } from "src/constant/category";

import { getStatistics } from "../services/api";

const Home: NextPage = (props: any) => {
	const { data } = props;

	return (
		<>
			<Header title="PPDIKTI Mobile" isTitleClickAble />
			<Container>
				<Statistics data={data} />
				<FindSection category={CATEGORY} />
			</Container>
			<Footer />
		</>
	);
};

export default Home;

export async function getStaticProps() {
	const responseData = await getStatistics();

	return {
		props: {
			data: responseData,
		},
	};
}
