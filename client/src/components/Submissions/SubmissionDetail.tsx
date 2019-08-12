import React from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "..";

import "./SubmissionDetail.css";

interface DetailProps {
	id: number;
	submission: any;
	loading: boolean;
	error: boolean;
}

const SubmissionDetail: React.FC<DetailProps> = ({
	id,
	submission,
	loading,
	error,
}) => {
	if (loading) {
		return (
			<section className="card">
				<Skeleton />
			</section>
		);
	}

	if (submission && !submission.error) {
		return (
			<section className="submission-detail card row">
				<div className="column">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={submission.thumbnail}
					>
						<div
							className="thumbnail"
							style={{ backgroundImage: `url(${submission.thumbnail})` }}
						/>
					</a>
				</div>
				<div className="column content">
					<h1 className="row">
						{submission.title}
						<p className="light">
							by{" "}
							<Link className="link" to={`/user/${submission.author.username}`}>
								{submission.author.username}
							</Link>
						</p>
					</h1>
					<p>{submission.content}</p>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={submission.githubUrl}
						className="link row a-centered"
					>
						Check out on GitHub
						<i className="material-icons">open_in_new</i>
					</a>
				</div>
			</section>
		);
	}

	return (
		<div className="card">
			<p className="light">Something went wrong. Please try again later.</p>
		</div>
	);
};
export default SubmissionDetail;