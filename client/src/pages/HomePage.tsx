import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
	AddSubmission,
	Header,
	QuestionsList,
	Sidebar,
	SubmissionHeader,
	SubmissionsList,
} from "../components";
import { useFetch } from "../hooks";

interface HomePageProps {
	auth: any;
}

const HomePage: React.FC<HomePageProps> = ({ auth }) => {
	return (
		<>
			{/* TODO: Logged in header */}
			{auth.authenticated ? <SubmissionHeader /> : <Header />}

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

const mapStateToProps = (state: any) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(HomePage);

const PopularSubmissions = () => {
	const [{ data, loading, error }] = useFetch("/submissions/recent", []);
	return (
		<div className="popular-submissions spaced-bottom">
			<h2>Recent submissions</h2>
			<div className="row spaced-bottom">
				<AddSubmission />
				<SubmissionsList submissions={data} loading={loading} error={error} />
			</div>
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
