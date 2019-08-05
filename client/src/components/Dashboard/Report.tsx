import React, { useState } from "react";
import { QuestionDetail } from "..";
import { fetchUrl } from "../../hooks";

interface ReportsProps {
	auth: any;
	id: number;
	content: string;
	question: any;
}

const Report: React.FC<ReportsProps> = ({ auth, id, content, question }) => {
	const [success, setSuccess] = useState("");
	const [error, setError] = useState("");

	const deletePost = async () => {
		const res = await fetch(`${fetchUrl}/reports/${id}`, {
			method: "DELETE",
			headers: {
				Authorization: auth.token,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		const json = await res.json();

		if (!json.error) {
			setSuccess("Successfully deleted post");
			return;
		}

		setError("Something went wrong. Please try again later.");
	};

	const ignorePost = async () => {
		const res = await fetch(`${fetchUrl}/reports/${id}`, {
			method: "PATCH",
			headers: {
				Authorization: auth.token,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		const json = await res.json();

		if (!json.error) {
			setSuccess("Successfully ignored report");
			return;
		}

		setError("Something went wrong. Please try again later.");
	};

	return (
		<div className="report card">
			<p className="success">{success}</p>
			<p className="warning">{error}</p>
			{!success && (
				<>
					<QuestionDetail
						id={question.id}
						question={question}
						loading={false}
						error={false}
					/>

					<p>{content}</p>

					<div className="btn-container">
						<button
							onClick={() => ignorePost()}
							className="button small light"
							style={{ marginRight: `8px` }}
						>
							Ignore report
						</button>
						<button
							onClick={() => deletePost()}
							className="button small danger"
						>
							Remove post
						</button>
					</div>
				</>
			)}
		</div>
	);
};
export default Report;
