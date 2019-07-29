import React from "react";
import Submission, { SubmissionProps } from "./Submission";

import "./Submission.css";

interface SubmissionsListProps {
	submissions: SubmissionProps[];
	loading: boolean;
	error: boolean;
}

const SubmissionsList: React.FC<SubmissionsListProps> = ({
	submissions,
	loading,
	error,
}) => {
	return !loading && !error && submissions.length > 0 ? (
		<div className="submissions row">
			{submissions.map((el: any) => (
				<Submission
					key={el.id}
					id={el.id}
					background={el.thumbnail}
					title={el.title}
					subtitle={el.contest.title}
				/>
			))}
		</div>
	) : null;
};
export default SubmissionsList;
