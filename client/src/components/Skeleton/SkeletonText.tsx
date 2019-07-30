import React from "react";

import "./Skeleton.css";

const SkeletonText = () => {
	const getRandomWidth = () => {
		const min = 30;
		const max = 90;
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	return (
		<div className="skeleton-text" style={{ width: `${getRandomWidth()}%` }} />
	);
};
export default SkeletonText;
