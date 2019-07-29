import React from "react";
import { Link } from "react-router-dom";
import { Logo, Menu, SearchBar } from "../index";
import NavigationDropdown from "./NavigationDropdown";
import UserDropdown from "./UserDropdown";

import "./Navigation.css";

const Navigation: React.FC = () => {
	return (
		<nav className="row a-centered j-between">
			<Link to="/" className="logo row centered">
				<Logo />
				<span className="sm-hide">Orbit</span>
			</Link>
			<NavigationDropdown />
			<SearchBar />

			<section className="links row sm-hide">
				<Menu />
			</section>
			{/* TODO: make dynamic */}
			{/* <UserDropdown /> */}
			<Link to="/signup" className="button light signup">
				Sign up
			</Link>
		</nav>
	);
};

export default Navigation;
