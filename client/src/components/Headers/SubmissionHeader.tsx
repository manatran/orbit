import React from "react";
import { capitalizeFirstLetter } from "../../helpers";
import { useFetch } from "../../hooks";

import "./Header.css";

const SubmissionHeader: React.FC = () => {
	const [{ data }] = useFetch("/challenges/current", null);

	if (data && !data.error) {
		return (
			<header className="secondary row j-centered wrap">
				<div className="column">
					<h1>This month's challenge</h1>
					<p>
						{capitalizeFirstLetter(data.month)} {data.year}
					</p>
				</div>
				<div className="column">
					<h2>{data.title}</h2>
					<p>{data.description}</p>
					<p>Be creative and have fun!</p>
				</div>
			</header>
		);
	}

	return <div className="body spaced" />;
};
export default SubmissionHeader;
