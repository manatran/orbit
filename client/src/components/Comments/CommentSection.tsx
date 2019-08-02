import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUrl, useFetch } from "../../hooks";
import { CommentsList } from "../index";

import "./CommentSection.css";

interface CommentsProps {
	id: number;
	auth: any;
	initial?: any[];
}

const CommentSection: React.FC<CommentsProps> = ({
	id,
	auth,
	initial = [],
}) => {
	const [content, setContent] = useState("");
	const [newComments, setNewComments] = useState(initial);

	const [{ data, loading, error }] = useFetch(`/comments/${id}`, []);

	const createComment = async (e: any) => {
		e.preventDefault();

		if (content) {
			const body = {
				content,
				postId: id,
			};

			const res = await fetch(`${fetchUrl}/comments`, {
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
				setContent("");
				setNewComments([json, ...newComments]);
			}
		}
	};

	return (
		<section className="comment-section">
			<section className="create-comment spaced-bottom">
				{!auth.authenticated ? (
					<div className="meta card row a-centered">
						<p className="light">Please sign up to share your thoughts.</p>
						<Link to="/signup" className="button light signup">
							Sign up
						</Link>
					</div>
				) : (
					<form onSubmit={(e) => createComment(e)} className="column card">
						<div className="meta row a-centered">
							<img src={auth.user.avatar_url} alt="User" />
							<p>
								Comment as{" "}
								<Link
									className="link"
									to={`/user/${auth.user.profile.username}`}
								>
									{auth.user.profile.username}
								</Link>
							</p>
						</div>
						<textarea
							value={content}
							onChange={(e) => setContent(e.target.value)}
							placeholder="Write your thoughts..."
						/>
						<div className="row">
							<button className="button" type="submit">
								Submit
							</button>
							{content && (
								<button className="button light" onClick={() => setContent("")}>
									Cancel
								</button>
							)}
						</div>
					</form>
				)}
			</section>

			<CommentsList
				comments={[...newComments, ...data]}
				loading={loading}
				error={error}
			/>
		</section>
	);
};

const mapStateToProps = (state: any) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(CommentSection);
