import React from "react";
import { SkeletonImg } from "..";
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
	return (
		<div className="submissions">
			{loading && <SubmissionSkeleton />}
			{error && <SubmissionError />}

			{!loading && !error && submissions.length > 0 ? (
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
			) : (
				<p className="light">No submissions yet!</p>
			)}
		</div>
	);
};
export default SubmissionsList;

const SubmissionSkeleton = () => {
	return (
		<div className="row">
			<SkeletonImg />
			<SkeletonImg />
			<SkeletonImg />
		</div>
	);
};

const SubmissionError = () => {
	return <p className="light">Something went wrong. Please try again later.</p>;
};
