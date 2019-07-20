import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Dropdown from "../Dropdown/Dropdown";

const UserDropdown: React.FC = () => {
	return (
		<Dropdown
			width="150px"
			button={<NavigationDropdownButton />}
			list={<NavigationDropdownList />}
		/>
	);
};
export default UserDropdown;

const NavigationDropdownButton = () => {
	return (
		<React.Fragment>
			<span className="row a-centered j-end" style={{ alignSelf: "flex-end" }}>
				<div className="user column a-end">
					<span className="username">manatran</span>
					<span className="rep">800 rep</span>
				</div>
				<img
					src="https://avatars1.githubusercontent.com/u/22441701?s=460&v=4"
					alt="Profile"
					className="profile-pic rounded"
				/>
			</span>
			<i className="material-icons">arrow_drop_down</i>
		</React.Fragment>
	);
};

const NavigationDropdownList = () => {
	return (
		<React.Fragment>
			<section className="menu">
				<h2 className="small">Options</h2>
				<Link to="/user/manatran" className="row a-centered">
					<i className="material-icons icon">account_circle</i>
					Profile
				</Link>
				<Link to="/settings" className="row a-centered">
					<i className="material-icons icon">settings</i>
					Settings
				</Link>
			</section>

			<section className="links column">
				<h2 className="small">Links</h2>
				<Link to="/privacy">Privacy policy</Link>
				<Link to="/terms">Terms of use</Link>
			</section>

			<section className="logout">
				<Link to="/settings" className="row a-centered">
					<i className="material-icons icon">logout</i>
					Logout
				</Link>
			</section>
		</React.Fragment>
	);
};
