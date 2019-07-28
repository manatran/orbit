import React from "react";
import { Link } from "react-router-dom";

const AddSubmission: React.FC = () => {
	return (
		<Link to="/submit" className="submission add-submission">
			<div className="meta sm-hide">
				<h2>Add your creation</h2>
			</div>
			<div className="thumbnail centered">
				<i className="material-icons">library_add</i>
			</div>
		</Link>
	);
};
export default AddSubmission;
