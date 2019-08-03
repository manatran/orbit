import React from "react";
import { Sidebar } from "../../components";
import { useTitle } from "../../hooks";

const SettingsPage = () => {
	useTitle("Settings");

	return (
		<div className="body spaced row">
			<Sidebar />
			<main>
				<p>hello</p>
			</main>
		</div>
	);
};
export default SettingsPage;
