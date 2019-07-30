import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Logo, Menu, SearchBar } from "../index";
import NavigationDropdown from "./NavigationDropdown";
import UserDropdown from "./UserDropdown";

import "./Navigation.css";

interface NavProps {
	auth: any;
}

const Navigation: React.FC<NavProps> = ({ auth }) => {
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
			{auth.authenticated ? (
				<UserDropdown user={auth.user} />
			) : (
				<Link to="/signup" className="button light signup">
					Sign up
				</Link>
			)}
		</nav>
	);
};

const mapStateToProps = (store: any) => ({
	auth: store.auth,
});

export default connect(mapStateToProps)(Navigation);
