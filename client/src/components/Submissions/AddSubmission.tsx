import React from "react";
import { Link } from "react-router-dom";

import "./Submission.css";

const AddSubmission: React.FC = () => {
	return (
		<Link
			to="/submit"
			title="Add your creation"
			className="submission add-submission centered"
		>
			<div className="icon-container">
				<i className="material-icons">library_add</i>
			</div>
		</Link>
	);
};
export default AddSubmission;
