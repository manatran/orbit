import React from "react";
import { Header, QuestionsList, Sidebar, Skeleton } from "../../components";
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
					{loading ? (
						<div>
							<Skeleton />
							<Skeleton />
							<Skeleton />
						</div>
					) : (
						<QuestionsList questions={data} />
					)}
				</main>
			</div>
		</React.Fragment>
	);
};
export default HomePage;
