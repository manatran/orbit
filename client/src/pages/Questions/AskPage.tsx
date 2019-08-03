import React from "react";
import { Ask, Sidebar } from "../../components";
import { useTitle } from "../../hooks";

const AskPage: React.FC = () => {
	useTitle("Ask");

	return (
		<div className="body row spaced">
			<Sidebar />
			<main>
				<Ask />
			</main>
		</div>
	);
};
export default AskPage;
