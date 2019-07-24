import React from "react";
import { Header, QuestionsList, Sidebar, Spinner } from "../../components";
import { useFetch } from "../../hooks";

const HomePage: React.FC = () => {
	const [{ data, loading }] = useFetch("/posts", []);

	return (
		<React.Fragment>
			<Header />
			<div className="body row">
				<Sidebar />

				<main>
					<h2>Trending questions</h2>
					{loading ? <Spinner /> : <QuestionsList questions={data} />}
				</main>
			</div>
		</React.Fragment>
	);
};
export default HomePage;
