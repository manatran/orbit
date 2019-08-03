import React, { useState } from "react";
import { useFetch } from "../../hooks";
import { CommentsList, QuestionsList, SubmissionsList } from "../index";

import "./Profile.css";

interface ProfileProps {
	id: number;
}

const Profile: React.FC<ProfileProps> = ({ id }) => {
	const [tab, setTab] = useState("submissions");

	return (
		<section className="profile">
			<div className="tab-nav row">
				<button
					onClick={() => setTab("submissions")}
					className={tab === "submissions" ? "active" : ""}
				>
					All submissions
				</button>
				<button
					onClick={() => setTab("questions")}
					className={tab === "questions" ? "active" : ""}
				>
					All questions
				</button>
				<button
					onClick={() => setTab("comments")}
					className={tab === "comments" ? "active" : ""}
				>
					All comments
				</button>
			</div>

			<RenderContent tab={tab} id={id} />
		</section>
	);
};
export default Profile;

interface ContentProps {
	tab: string;
	id: number;
}

const RenderContent: React.FC<ContentProps> = ({ tab, id }) => {
	switch (tab) {
		case "submissions":
			return <RenderSubmissions id={id} />;
		case "questions":
			return <RenderQuestions id={id} />;
		case "comments":
			return <RenderComments id={id} />;
	}
	return <RenderSubmissions id={id} />;
};

interface ListProps {
	id: number;
}

const RenderSubmissions: React.FC<ListProps> = ({ id }) => {
	const [{ data, loading, error }] = useFetch(`/submissions/author/${id}`, []);

	return <SubmissionsList submissions={data} loading={loading} error={error} />;
};

const RenderQuestions: React.FC<ListProps> = ({ id }) => {
	const [{ data, loading, error }] = useFetch(`/posts/author/${id}`, []);

	return <QuestionsList questions={data} loading={loading} error={error} />;
};

const RenderComments: React.FC<ListProps> = ({ id }) => {
	const [{ data, loading, error }] = useFetch(`/comments/author/${id}`, []);

	return <CommentsList comments={data} loading={loading} error={error} />;
};
