import React from "react";
import { Link } from "react-router-dom";

import "./Submission.css";

export interface SubmissionProps {
	id: number;
	background: string;
	title: string;
	subtitle: string;
}

const Submission: React.FC<SubmissionProps> = ({
	id,
	background,
	title,
	subtitle,
}) => {
	return (
		<Link
			to={`/submission/${id}`}
			className="submission"
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className="meta sm-hide">
				<h2>{title}</h2>
				<p>{subtitle}</p>
			</div>
		</Link>
	);
};
export default Submission;
