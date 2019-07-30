import React from "react";
import { SkeletonImg, SkeletonText, SkeletonTitle } from "../index";

import "./Skeleton.css";

const Skeleton: React.FC = () => {
	return (
		<div className="skeleton-container row a-centered">
			<SkeletonImg />
			<div className="column" style={{ width: `100%` }}>
				<SkeletonTitle />
				<SkeletonText />
				<SkeletonText />
			</div>
		</div>
	);
};
export default Skeleton;
