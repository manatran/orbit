import React from "react";

import "./Skeleton.css";

const Skeleton: React.FC = () => {
	const getRandomWidth = () => {
		const min = 30;
		const max = 90;

		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	return (
		<div className="skeleton-container row a-centered">
			<div className="skeleton-img rounded" />
			<div className="column" style={{ width: `100%` }}>
				<p className="skeleton-title" />
				<p
					className="skeleton-text"
					style={{
						width: `${getRandomWidth()}%`,
					}}
				/>
				<p
					className="skeleton-text"
					style={{
						width: `${getRandomWidth()}%`,
					}}
				/>
			</div>
		</div>
	);
};
export default Skeleton;
