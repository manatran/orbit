import React from "react";
import { Link } from "react-router-dom";
import { Logo, SearchBar } from "../index";
import NavigationDropdown from "./NavigationDropdown";
import UserDropdown from "./UserDropdown";

import "./Navigation.css";

interface NavigationProps {
	auth?: any;
}

const Navigation: React.FC<NavigationProps> = ({ auth }) => {
	return (
		<nav className="row a-centered j-between">
			<Link to="/" className="logo row centered">
				<Logo />
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
			{/* TODO: make dynamic */}
			{/* <UserDropdown /> */}
			<Link to="/signup" className="button light signup">
				Sign up
			</Link>
		</nav>
	);
};

export default Navigation;
