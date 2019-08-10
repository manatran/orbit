import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import GitHub from "../../assets/icons/github.png";
import { fetchUrl } from "../../hooks";

interface SubmitProps {
	token: string;
}

const Submit: React.FC<SubmitProps> = ({ token }) => {
	const [redirect, setRedirect] = useState("");
	const [error, setError] = useState("");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [githubUrl, setGhurl] = useState("");
	const [thumbnail, setThumbnail] = useState("");
	const [contestId, setContest] = useState("");

	useEffect(() => {
		fetch(`${fetchUrl}/challenges/current`)
			.then((res) => res.json())
			.then((data) => {
				if (data && !data.error) {
					console.log(data.id);
					setContest(data.id);
				}
			})
			.catch(() =>
				setError("Cannot find current challenge. Please try again later")
			);
	}, []);

	const submit = async (e: any) => {
		e.preventDefault();
		if (!title || !content || !githubUrl || !thumbnail) {
			setError("Please fill in all the fields.");
			return;
		}

		const body = {
			title,
			content,
			thumbnail,
			githubUrl,
			contestId,
		};

		const res = await fetch(`${fetchUrl}/submissions`, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				Authorization: token,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		const newSubmission = await res.json();

		if (newSubmission.error) {
			setError("Something went wrong. Please try again later.");
			return;
		}

		setError("");
		setRedirect(newSubmission.id);
	};

	return (
		<div className="card ask">
			<h2>Submit your creation</h2>
			<p className="error">{error}</p>
			<form className="column" onSubmit={(e) => submit(e)}>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Title"
				/>

				<div className="img-input select-container row a-centered">
					<div
						className="thumbnail"
						style={{ backgroundImage: `url(${thumbnail})` }}
					/>
					<input
						type="text"
						placeholder="Thumbnail URL"
						value={thumbnail}
						onChange={(e) => setThumbnail(e.target.value)}
					/>
				</div>

				<div className="img-input select-container row a-centered">
					<div
						className="thumbnail"
						style={{ border: "none", backgroundImage: `url(${GitHub})` }}
					/>
					<input
						type="text"
						placeholder="GitHub Repository URL"
						value={githubUrl}
						onChange={(e) => setGhurl(e.target.value)}
					/>
				</div>

				<textarea
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder="Provide some details and elaborate on your work"
				/>

				<button className="button" type="submit">
					Submit
				</button>
			</form>
			{redirect && <Redirect to={`/subissions/${redirect}`} />}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	token: state.auth.token,
});

export default connect(mapStateToProps)(Submit);
