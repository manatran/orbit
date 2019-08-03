import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTimeDifference } from "../../helpers";
import { fetchUrl, useFetch } from "../../hooks";
import { SubcommentsList } from "../index";

export interface CommentProps {
	auth: any;
	id: number;
	content: string;
	timestamp: string;
	hue: number;
	author: any;
	initial?: any[];
}

const Comment: React.FC<CommentProps> = ({
	initial = [],
	auth,
	id,
	content,
	author,
	timestamp,
	hue,
}) => {
	const [showInput, setShowInput] = useState(false);
	const [hidden, setHidden] = useState(false);
	const [subcommentContent, setSubcommentContent] = useState("");
	const [newSubcomments, setNewSubcomments] = useState(initial);

	const [{ data, loading, error }] = useFetch(`/subcomments/${id}`, []);

	const createSubcomment = async (e: any) => {
		e.preventDefault();
		if (subcommentContent) {
			const body = {
				content: subcommentContent,
				commentId: id,
			};

			const res = await fetch(`${fetchUrl}/subcomments`, {
				method: "POST",
				body: JSON.stringify(body),
				headers: {
					Authorization: auth.token,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
			const json = await res.json();

			if (!json.error) {
				setShowInput(false);
				setSubcommentContent("");
				setNewSubcomments([json, ...newSubcomments]);
			}
		}
	};

	const deleteComment = async () => {
		const res = await fetch(`${fetchUrl}/comments/${id}`, {
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
				<>
					<div
						className="card comment"
						style={{ borderLeftColor: `hsla(${hue}, 77%, 58%, 0.5)` }}
					>
						<div className="row a-centered meta">
							{author ? (
								<Link to={`/user/${author.username}`} className="link author">
									{author.isAdmin && (
										<i className="material-icons admin">verified_user</i>
									)}
									{author.username}
								</Link>
							) : (
								<p className="light author">[DELETED]</p>
							)}
							<p className="light">{getTimeDifference(timestamp)}</p>
						</div>
						<p>{content}</p>
						<p className="row options light">
							<span onClick={() => setShowInput(!showInput)}>
								{showInput ? "Cancel" : "Reply"}
							</span>
							{auth.authenticated && author.id === auth.user.profile.id}
							<span className="danger" onClick={() => deleteComment()}>
								Delete
							</span>
						</p>
						{showInput && (
							<div className="subcomment-input">
								<form onSubmit={(e: any) => createSubcomment(e)}>
									<textarea
										placeholder="Reply to this comment"
										value={subcommentContent}
										onChange={(e: any) => setSubcommentContent(e.target.value)}
									/>
									<div className="button-container row">
										<button className="button submit" type="submit">
											Submit
										</button>
										{subcommentContent && (
											<button
												className="button light"
												onClick={() => {
													setShowInput(false);
													setSubcommentContent("");
												}}
											>
												Cancel
											</button>
										)}
									</div>
								</form>
							</div>
						)}
					</div>
					{!loading && (
						<SubcommentsList
							hue={hue}
							subcomments={[...newSubcomments, ...data]}
							loading={loading}
							error={error}
						/>
					)}
				</>
			)}
		</>
	);
};

const mapStateToProps = (state: any) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Comment);
