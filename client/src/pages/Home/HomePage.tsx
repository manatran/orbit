import React from "react";
import { Header, QuestionsList, Sidebar, Skeleton } from "../../components";
import { useFetch } from "../../hooks";

const HomePage: React.FC = () => {
	const [{ data, loading, error }] = useFetch("/posts", []);

	return (
		<React.Fragment>
			<Header />
			<div className="body row">
				<Sidebar />

				<main>
					<h2>Trending questions</h2>
					<QuestionsList questions={data} loading={loading} error={error} />
				</main>
			</div>
		</React.Fragment>
	);
};
export default HomePage;
