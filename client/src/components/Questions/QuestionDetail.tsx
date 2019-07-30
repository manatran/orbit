import React from "react";
import { Link } from "react-router-dom";
import { getTimeDifference } from "../../helpers";
import Skeleton from "../Skeleton/Skeleton";

import "./QuestionDetail.css";

interface DetailProps {
	question: {
		id: number;
		title: string;
		content: string;
		totalLikes: number;
		createdAt: string;
		subject: {
			id: number;
			name: string;
			description: string;
			thumbnail: string;
			subscribers: number | null;
		};
		author: {
			id: number;
			username: string;
			reputation: number;
			isAdmin: boolean;
		};
	};
	loading: boolean;
	error: boolean;
}

const QuestionDetail: React.FC<DetailProps> = ({
	question,
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

	if (question) {
		const { author, subject } = question;
		return (
			<section className="question-detail card">
				<h2>{question.title}</h2>
				<p className="author light" title={question.createdAt}>
					Posted {getTimeDifference(question.createdAt)} by{" "}
					{author.isAdmin ? (
						<Link className="link" to={`/user/${author.username}`}>
							<i className="material-icons">verified_user</i>
							{author.username}
						</Link>
					) : (
						<Link to={`/user/${author.username}`}>{author.username}</Link>
					)}
				</p>

				<div className="row a-centered">
					<button className="likes row a-centered" title="Endorse this post">
						<i className="material-icons">stars</i>
						{question.totalLikes || 0}
					</button>
					<div className="content">
						<p>{question.content}</p>
					</div>
				</div>

				<div className="row a-centered options">
					<span className="row a-centered">
						<i className="material-icons">comments</i>0 comments
					</span>
					<span className="row a-centered">
						<i className="material-icons">report</i>report
					</span>
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
export default QuestionDetail;
