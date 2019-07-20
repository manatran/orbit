import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { SearchBar } from "../index";
import NavigationDropdown from "./NavigationDropdown";
import UserDropdown from "./UserDropdown";

import "./Navigation.css";

const Navigation: React.FC = () => {
	return (
		<nav className="row a-centered j-between">
			<Link to="/" className="logo row centered">
				<img src={Logo} alt="Orbit" className="rounded" />
				<span>Orbit</span>
			</Link>
			<NavigationDropdown />
			<SearchBar />
			<Link to="/submit" className="create centered">
				<i className="material-icons">create</i>
			</Link>
			<UserDropdown />
		</nav>
	);
};
export default Navigation;
