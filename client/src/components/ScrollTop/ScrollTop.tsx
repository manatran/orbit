import React from "react";

import "./ScrollTop.css";

const ScrollTop = () => {
	return (
		<div className="scrolltop column centered">
			<p className="light">That's it, no more posts!</p>
			<p className="light">You could always create more if you want.</p>
			<p
				className="scroll-btn light row centered"
				onClick={() => {
					window.scroll({ top: 0, left: 0, behavior: "smooth" });
				}}
			>
				Back to top
				<i className="material-icons">subdirectory_arrow_right</i>
			</p>
		</div>
	);
};
export default ScrollTop;
