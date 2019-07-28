import React from "react";
import { Link } from "react-router-dom";
import {
	Header,
	QuestionsList,
	Sidebar,
	SubmissionsList,
} from "../../components";
import { useFetch } from "../../hooks";

const HomePage: React.FC = () => {
	return (
		<>
			<Header />
			<div className="body row">
				<Sidebar />
				<main>
					<PopularSubmissions />
					<TrendingQuestions />
				</main>
			</div>
		</>
	);
};
export default HomePage;

const PopularSubmissions = () => {
	const [{ data, loading, error }] = useFetch("/submissions/recent", []);
	return (
		<div className="popular-submissions spaced-bottom">
			<h2>Recent submissions</h2>
			<SubmissionsList submissions={data} loading={loading} error={error} />
			<Link className="link row a-centered" to="/submissions">
				Show all submissions{" "}
				<i className="material-icons">keyboard_arrow_right</i>
			</Link>
		</div>
	);
};

const TrendingQuestions = () => {
	const [{ data, loading, error }] = useFetch("/posts/recent", []);
	return (
		<div className="trending">
			<h2>Trending questions</h2>
			<QuestionsList questions={data} loading={loading} error={error} />
		</div>
	);
};
