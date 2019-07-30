import React from "react";
import { QuestionsList, Sidebar, SubHeader } from "../../components";
import { useFetch } from "../../hooks";

interface OverviewProps {
	match: {
		params: {
			slug: string;
		};
	};
}

const QuestionsOverviewPage: React.FC<OverviewProps> = ({ match }) => {
	const slug = match.params.slug;
	const [{ data, loading, error }] = useFetch(`/category/posts/${slug}`);

	return (
		<>
			<SubHeader slug={slug} />
			<div className="body row">
				<Sidebar />
				<main>
					<QuestionsList questions={data} loading={loading} error={error} />
				</main>
			</div>
		</>
	);
};
export default QuestionsOverviewPage;
