import React from "react";
import { QuestionsList, Spinner } from "..";
import SubmissionsList from "../Submissions/SubmissionsList";

import "./SearchResults.css";

interface SearchProps {
	q: string | null;
	results: any;
	loading: boolean;
	error: boolean;
}

const SearchResults: React.FC<SearchProps> = ({
	q,
	results,
	loading,
	error,
}) => {
	if (loading) {
		return <Spinner />;
	}

	if (results && !results.error) {
		return (
			<>
				<section className="submissions-results">
					<h2>Submission results for {q}</h2>
					<SubmissionsList
						submissions={results.submissions}
						loading={loading}
						error={error}
					/>
				</section>

				<section className="posts-results">
					<h2>Post results for {q}</h2>
					<QuestionsList
						questions={results.posts}
						loading={loading}
						error={error}
					/>
				</section>
			</>
		);
	}

	return (
		<div className="card">
			<p className="light">Something went wrong. Please try again later.</p>
		</div>
	);
};
export default SearchResults;
