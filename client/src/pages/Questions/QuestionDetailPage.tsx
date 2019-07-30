import React from "react";
import { Sidebar, SubHeader } from "../../components";
import { useFetch } from "../../hooks";

interface DetailProps {
	match: {
		params: any;
	};
}

const QuestionDetailPage: React.FC<DetailProps> = ({ match }) => {
	const id = match.params.id;
	const [{ data, loading, error }] = useFetch(`/post/${id}`);
	return (
		<>
			<SubHeader slug="javascript" />
			<div className="body row">
				<Sidebar />
				<main>{data && data.title}</main>
			</div>
		</>
	);
};
export default QuestionDetailPage;
