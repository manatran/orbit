import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { QuestionDetail, Sidebar } from "../../components";
import { fetchUrl, useFetch } from "../../hooks";

interface ReportProps {
	auth: any;
	match: any;
}

const ReportPage: React.FC<ReportProps> = ({ auth, match }) => {
	const id = match.params.id;
	const [description, setDescription] = useState("");
	const [redirect, setRedirect] = useState(false);

	const [{ data, loading, error }] = useFetch(`/post/${id}`, null);

	const report = async () => {
		if (description) {
			const body = {
				content: description,
				postId: id,
			};

			const res = await fetch(`${fetchUrl}/reports`, {
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
				setRedirect(true);
			}
		}
	};

	return (
		<div className="body spaced row">
			<Sidebar />
			<main className="report">
				<section className="card">
					{data && (
						<QuestionDetail
							id={id}
							question={data}
							loading={loading}
							error={error}
						/>
					)}

					<textarea
						className="card"
						style={{ width: `100%` }}
						placeholder="Please state your reason for reporting this post."
						value={description}
						onChange={(e: any) => setDescription(e.target.value)}
					/>

					<p className="light">Please think twice before reporting.</p>
					<div className="btn-container row">
						<Link
							to={`question/${id}`}
							className="button small light"
							style={{ display: `block`, marginRight: `8px` }}
						>
							Cancel
						</Link>
						<button onClick={() => report()} className="button small danger">
							Report
						</button>
					</div>
					{redirect && <Redirect to={`/question/${id}`} />}
				</section>
			</main>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(ReportPage);
