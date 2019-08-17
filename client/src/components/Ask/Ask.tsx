import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { sortAlphabetically } from "../../helpers";
import { fetchUrl, useFetch } from "../../hooks";

import "./Ask.css";

interface AskProps {
	token: string;
	authenticated: boolean;
}

const Ask: React.FC<AskProps> = ({ token, authenticated }) => {
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
					<SelectList
						placeholder="Choose a community"
						options={data.sort(sortAlphabetically("name"))}
						value={subject}
						setValue={setSubject}
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
			{!authenticated && <Redirect to={`/signup`} />}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	token: state.auth.token,
	authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(Ask);

interface OptionProps {
	options: any[];
	value: any;
	setValue: any;
	placeholder: string;
}

export const SelectList: React.FC<OptionProps> = ({
	options,
	value,
	setValue,
	placeholder,
}) => {
	return (
		<>
			<select
				value={JSON.stringify(value)}
				onChange={(e) => setValue(JSON.parse(e.target.value))}
			>
				<option hidden>{placeholder}</option>
				{options.map((el) => (
					<option key={el.id} value={JSON.stringify(el)}>
						{el.name}
					</option>
				))}
			</select>
		</>
	);
};
