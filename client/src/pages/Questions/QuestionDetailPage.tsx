import React, { useEffect } from "react";
import { QuestionDetail, Sidebar, SubHeader } from "../../components";
import { useFetch } from "../../hooks";

interface DetailProps {
	match: {
		params: any;
	};
}

const QuestionDetailPage: React.FC<DetailProps> = ({ match }) => {
	const id = match.params.id;
	const [{ data, loading, error }] = useFetch(`/post/${id}`);

	useEffect(() => {
		if (data && data.title) document.title = `${data.title}  |  Orbit`;

		return () => {
			document.title = "Orbit";
		};
	}, [data]);

	return (
		<>
			<SubHeader slug={(data && data.subject && data.subject.slug) || null} />
			<div className="body row">
				<Sidebar />
				<main>
					<QuestionDetail question={data} loading={loading} error={error} />
				</main>
			</div>
		</>
	);
};
export default QuestionDetailPage;
