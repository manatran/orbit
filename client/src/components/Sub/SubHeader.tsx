import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks";
import { SkeletonImg, SkeletonText, SkeletonTitle } from "../index";

import "./SubHeader.css";

interface HeaderProps {
	slug: string;
}

const SubHeader: React.FC<HeaderProps> = ({ slug }) => {
	const [{ data }] = useFetch(`/categories/${slug}`, null);

	if (!data) {
		return (
			<div className="subheader">
				<div className="row a-centered">
					<SkeletonImg />
					<div className="column">
						<SkeletonTitle />
						<SkeletonText />
					</div>
				</div>
			</div>
		);
	}

	if (data) {
		const { thumbnail, name, description } = data;
		return (
			<Link className="subheader" to={`/subject/${slug}`}>
				<div className="row a-centered">
					<img src={thumbnail} alt="name" />
					<div className="column">
						<h2 className="title">{name}</h2>
						<p>{description}</p>
					</div>
				</div>
			</Link>
		);
	}

	return null;
};
export default SubHeader;
