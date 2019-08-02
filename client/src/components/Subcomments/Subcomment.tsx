import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTimeDifference } from "../../helpers";
import { fetchUrl } from "../../hooks";

import "./Subcomment.css";

export interface SubcommentProps {
	auth: any;
	id: number;
	content: string;
	timestamp: string;
	hue: number;
	author: any;
}

const Subcomment: React.FC<SubcommentProps> = ({
	auth,
	id,
	content,
	author,
	timestamp,
	hue,
}) => {
	const [hidden, setHidden] = useState(false);

	const deleteSubcomment = async () => {
		const res = await fetch(`${fetchUrl}/subcomments/${id}`, {
			method: "DELETE",
			headers: {
				Authorization: auth.token,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});

		const json = await res.json();

		if (!json.error) {
			setHidden(true);
		}
	};
	return (
		<>
			{!hidden && (
				<div
					className="comment subcomment"
					style={{ borderLeftColor: `hsla(${hue}, 77%, 58%, 0.25)` }}
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
					<p className="row options light">
						{author.id === auth.user.profile.id}
						<span className="danger" onClick={() => deleteSubcomment()}>
							Delete
						</span>
					</p>
				</div>
			)}
		</>
	);
};

const mapStateToProps = (state: any) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Subcomment);
