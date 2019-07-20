import React from "react";

import "./Dropdown.css";

interface DropdownProps {
	button: any;
	list: any;
	width?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ button, list, width }) => {
	return (
		<section className="dropdown" style={{ width }}>
			<button className="row j-between a-centered">{button}</button>
			<section className="list column" style={{ width }}>
				{list}
			</section>
		</section>
	);
};
export default Dropdown;
