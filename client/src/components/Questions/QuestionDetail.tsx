import React from "react";
import { Link } from "react-router-dom";
import { getTimeDifference } from "../../helpers";
import { useFetch } from "../../hooks";
import Skeleton from "../Skeleton/Skeleton";

import "./QuestionDetail.css";

interface DetailProps {
	id: number;
	question: {
		error?: any;
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
	id,
	question,
	loading,
	error,
}) => {
	const [{ data }] = useFetch(`/comments/${id}`, null);

	const endorse = () => {
		// TODO: post request to like
	};

	if (loading) {
		return (
			<section className="card spaced-bottom">
				<Skeleton />
			</section>
		);
	}

	if (question && !question.error) {
		const { author } = question;

		return (
			<section className="question-detail card spaced-bottom">
				<h2>{question.title}</h2>
				<p className="author light" title={question.createdAt}>
					Posted {getTimeDifference(question.createdAt)} by{" "}
					<Link className="link" to={`/user/${author.username}`}>
						{author.isAdmin && <i className="material-icons">verified_user</i>}
						{author.username}
					</Link>
				</p>

				<div className="row a-centered">
					<button
						onClick={() => endorse()}
						className="likes row a-centered"
						title="Endorse this post"
					>
						<i className="material-icons">stars</i>
						{question.totalLikes || 0}
					</button>
					<div className="content">
						<p>{question.content}</p>
					</div>
				</div>

				<div className="row a-centered options">
					<span className="row a-centered">
						<i className="material-icons">comments</i>
						{(data && data.length) || 0} comment(s)
					</span>
					{/* TODO: report post */}
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
