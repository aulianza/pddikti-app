import type { AppProps } from "next/app";
import Layout from "../components/layouts";

import "@/assets/css/globals.css";
import "antd/dist/antd.css";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default App;
