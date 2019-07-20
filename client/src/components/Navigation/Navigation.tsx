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
				<span className="sm-hide">Orbit</span>
			</Link>
			<NavigationDropdown />
			<SearchBar />

			<section className="links row sm-hide">
				<Link to="/" className="centered" title="Feed">
					<i className="material-icons">trending_up</i>
				</Link>
				<Link to="/challenges" className="centered" title="Challenges">
					<i className="material-icons">important_devices</i>
				</Link>
				<Link to="/suggestions" className="centered" title="Suggestions">
					<i className="material-icons">wb_incandescent</i>
				</Link>
				<Link to="/submit" className="create centered" title="Create post">
					<i className="material-icons">create</i>
				</Link>
			</section>

			<UserDropdown />
		</nav>
	);
};
export default Navigation;
