import React, { useEffect } from "react";
import {
	CommentSection,
	QuestionDetail,
	Sidebar,
	SubHeader,
} from "../../components";
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
					<QuestionDetail
						id={data && data.id}
						question={data}
						loading={loading}
						error={error}
					/>
					{!loading && data && !data.error && <CommentSection id={data.id} />}
				</main>
			</div>
		</>
	);
};
export default QuestionDetailPage;
