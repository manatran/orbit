import React from "react";
import { Sidebar, SubmissionDetail } from "../../components";
import { useFetch, useTitle } from "../../hooks";

interface DetailProps {
	match: any;
}

const SubmissionDetailPage: React.FC<DetailProps> = ({ match }) => {
	const id = match.params.id;
	const [{ data, loading, error }] = useFetch(`/submission/${id}`, null);

	useTitle(data && data.title);

	return (
		<div className="body spaced row">
			<Sidebar />
			<main>
				<SubmissionDetail
					id={data && data.id}
					submission={data}
					loading={loading}
					error={error}
				/>
			</main>
			<aside />
		</div>
	);
};
export default SubmissionDetailPage;
