import React from "react";
import { Sidebar, Submit } from "../../components";

const SubmitPage: React.FC = () => {
	return (
		<div className="body spaced row">
			<Sidebar />
			<main>
				<Submit />
			</main>
		</div>
	);
};
export default SubmitPage;
