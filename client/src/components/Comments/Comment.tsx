import React from "react";
import { Link } from "react-router-dom";
import { getTimeDifference } from "../../helpers";

export interface CommentProps {
	id: number;
	content: string;
	timestamp: string;
	hue: number;
	author: any;
}

const Comment: React.FC<CommentProps> = ({
	content,
	author,
	timestamp,
	hue,
}) => {
	return (
		<div
			className="card comment"
			style={{ borderLeftColor: `hsla(${hue}, 77%, 58%, 0.5)` }}
		>
			<div className="row a-centered meta">
				<Link to={`/user/${author.username}`} className="link author">
					{author.isAdmin && (
						<i className="material-icons admin">verified_user</i>
					)}
					{author.username}
				</Link>
				<p className="light">{getTimeDifference(timestamp)}</p>
			</div>
			<p>{content}</p>
		</div>
	);
};
export default Comment;
