import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getTimeDifference } from "../../helpers";
import { useFetch } from "../../hooks";
import Skeleton from "../Skeleton/Skeleton";

import "./QuestionDetail.css";

interface DetailProps {
	id: number;
	question: any;
	loading: boolean;
	error: boolean;
}

const QuestionDetail: React.FC<DetailProps> = ({
	id,
	question,
	loading,
	error,
}) => {
	const [liked, setLiked] = useState(0);
	const [{ data }] = useFetch(`/comments/${id}`, []);

	const endorse = () => {
		// TODO: POST request to increment or decrement
		if (liked) {
			setLiked(0);
		} else {
			setLiked(1);
		}
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
				{author ? (
					<p className="author light" title={question.createdAt}>
						Posted {getTimeDifference(question.createdAt)} by{" "}
						<Link className="link" to={`/user/${author.username}`}>
							{author.isAdmin && (
								<i className="material-icons">verified_user</i>
							)}
							{author.username}
						</Link>
					</p>
				) : (
					<p className="author light">[DELETED]</p>
				)}

				<div className="row a-centered">
					<button
						onClick={() => endorse()}
						className={`likes row a-centered ${liked && `liked`}`}
						title="Endorse this post"
					>
						<i className="material-icons">stars</i>
						{question.totalLikes + liked}
					</button>
					<div className="content">
						<p>{question.content}</p>
					</div>
				</div>

				<div className="row a-centered options">
					<span className="row a-centered">
						<i className="material-icons">comments</i>
						{data.length || 0} comment(s)
					</span>
					{/* TODO: report post */}
					<Link to={`/report/${id}`} className="row a-centered">
						<i className="material-icons">report</i>report
					</Link>
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
