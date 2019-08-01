import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { fetchUrl, useFetch } from "../../hooks";

import "./Ask.css";

interface AskProps {
	token: string;
}

const Ask: React.FC<AskProps> = ({ token }) => {
	const [error, setError] = useState("");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [subject, setSubject] = useState({
		id: 0,
		thumbnail: "",
	});
	const [redirect, setRedirect] = useState("");

	const [{ data }] = useFetch("/categories", []);

	const submit = async (e: any) => {
		e.preventDefault();
		if (!title || !content || subject.id === 0) {
			setError("Please fill in all the fields.");
			return;
		}

		const body = {
			title,
			content,
			subject: subject.id,
		};

		const res = await fetch(`${fetchUrl}/posts`, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				Authorization: token,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		const newPost = await res.json();

		if (newPost.error) {
			setError("Something went wrong. Please try again later.");
			return;
		}

		setError("");
		setRedirect(newPost.id);

		console.log(newPost);
	};

	return (
		<div className="card ask">
			<h2>Create a post</h2>
			<p className="error">{error}</p>
			<form className="column" onSubmit={(e) => submit(e)}>
				<div className="select-container row a-centered">
					<div
						className="thumbnail"
						style={{ backgroundImage: `url(${subject.thumbnail})` }}
					/>
					<CommunityOptions
						subjectList={data}
						subject={subject}
						setSubject={setSubject}
					/>
				</div>

				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Your specific question"
				/>

				<textarea
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder="Elaborate on your question"
				/>

				<button className="button" type="submit">
					Submit post
				</button>
			</form>
			{redirect && <Redirect to={`/question/${redirect}`} />}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	token: state.auth.token,
});

export default connect(mapStateToProps)(Ask);

interface OptionProps {
	subjectList: any[];
	subject: any;
	setSubject: any;
}

const CommunityOptions: React.FC<OptionProps> = ({
	subjectList,
	subject,
	setSubject,
}) => {
	return (
		<>
			<select
				value={JSON.stringify(subject)}
				onChange={(e) => setSubject(JSON.parse(e.target.value))}
			>
				<option hidden>Choose a community</option>
				{subjectList.map((el) => (
					<option key={el.id} value={JSON.stringify(el)}>
						{el.name}
					</option>
				))}
			</select>
		</>
	);
};
