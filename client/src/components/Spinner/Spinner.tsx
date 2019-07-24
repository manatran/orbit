import React from "react";

import "./Spinner.css";

interface SpinnerProps {
	size?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ size }) => {
	return (
		<section className="spinner-container centered">
			<div
				style={{
					height: `${size || 24}px`,
					width: `${size || 24}px`,
				}}
				className="spinner"
			/>
		</section>
	);
};
export default Spinner;
