import React from "react";
import { Link } from "react-router-dom";

import "./Question.css";

export interface QuestionProps {
	id: number;
	title: string;
	likes: number;
	subject: {
		name: string;
		thumbnail: string;
		slug: string;
	};
	author: {
		username: string;
		isAdmin: boolean;
	};
	timestamp: Date;
}

const Question: React.FC<QuestionProps> = ({
	id,
	title,
	likes,
	subject,
	author,
	timestamp,
}) => {
	return (
		<Link to={`/question/${id}`} className="question row a-centered">
			<div
				style={{ backgroundImage: `url(${subject.thumbnail})` }}
				className="thumbnail"
			/>
			<div className="question-body column">
				<h3>{title}</h3>
				<p>
					Posted to {subject.name} by{" "}
					{author.isAdmin && (
						<i className="material-icons admin">verified_user</i>
					)}{" "}
					{author.username}
				</p>
				<p>8 minutes ago</p>
			</div>
		</Link>
	);
};
export default Question;
