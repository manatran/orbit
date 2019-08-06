import React from "react";

import "./SearchBar.css";

interface SearchProps {
	action?: string;
	placeholder?: string;
}

const SearchBar: React.FC<SearchProps> = (props) => {
	return (
		<form
			className="search row a-centered"
			action={props.action || "/search"}
			method="GET"
		>
			{/* TODO: search functionality */}
			<i className="material-icons">search</i>
			<input
				type="text"
				name="q"
				placeholder={props.placeholder || "Search Orbit..."}
			/>
		</form>
	);
};
export default SearchBar;
