import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { SearchBar } from "../index";
import NavigationDropdown from "./NavigationDropdown";

import "./Navigation.css";

const Navigation: React.FC = () => {
	// Declare dropdown state variable
	const [dropdown, setDropdown] = useState(false);

	return (
		<nav className="row a-centered j-between">
			<Link to="/" className="logo row centered">
				<img src={Logo} alt="Orbit" />
				<span>Orbit</span>
			</Link>
			<section className="dropdown">
				<button
					onClick={() => setDropdown(!dropdown)}
					className={`row j-between ${dropdown && "active"}`}
				>
					<span className="row a-centered">
						<i className="material-icons icon">trending_up</i>
						<span>Feed</span>
					</span>
					<i className="material-icons">arrow_drop_down</i>
				</button>
				{dropdown && <NavigationDropdown />}
			</section>

			<SearchBar />
		</nav>
	);
};
export default Navigation;
