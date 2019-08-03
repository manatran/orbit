import React, { useState } from "react";
import { Redirect } from "react-router";
import { Dispatch } from "redux";
import { fetchUrl } from "../../hooks";

import "./Settings.css";

interface SettingsProps {
	token: string;
	logout: () => Dispatch;
}

const Settings: React.FC<SettingsProps> = ({ token, logout }) => {
	const [prompt, setPrompt] = useState(false);
	const [deleted, setDeleted] = useState(false);

	const deleteProfile = async () => {
		const res = await fetch(`${fetchUrl}/user`, {
			method: "DELETE",
			headers: {
				Authorization: token,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		const json = await res.json();

		if (json && !json.error) {
			logout();
			setDeleted(true);
		}
	};

	return (
		<div className="settings">
			<h2>Account settings</h2>
			<div className="card">
				<h3>Delete account</h3>
				<button className="button danger" onClick={() => setPrompt(!prompt)}>
					Delete account
				</button>

				{prompt && (
					<div className="prompt">
						<p className="error">
							<b>Warning:</b> you will lose all data related to your Orbit
							profile. This includes reputation and posts you created.
						</p>
						<div className="btn-container">
							<button
								className="button danger light"
								onClick={() => setPrompt(false)}
							>
								Cancel
							</button>
							<button className="button danger" onClick={() => deleteProfile()}>
								Delete
							</button>
						</div>
						{deleted && <Redirect to="/" />}
					</div>
				)}
			</div>
		</div>
	);
};
export default Settings;
