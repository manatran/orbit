import React from "react";
import { Link } from "react-router-dom";

import "./Sub.css";

interface SubProps {
	slug: string;
	big?: boolean;
	icon: string;
	title: string;
	description?: string;
}

const Sub: React.FC<SubProps> = ({ slug, big, icon, title, description }) => {
	return (
		<Link
			to={`/subject/${slug}`}
			className={`sub row a-centered ${big && "big"}`}
		>
			<img src={icon} alt="logo" />
			<div className="meta">
				<p>{title}</p>
				{big && description && <p className="description">{description}</p>}
			</div>
		</Link>
	);
};
export default Sub;
