import React from "react";
import { Ask, Sidebar } from "../../components";

const AskPage: React.FC = () => {
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
