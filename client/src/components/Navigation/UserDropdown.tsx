import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

const UserDropdown: React.FC = () => {
	return (
		<Dropdown
			width="150px"
			button={<UserDropdownButton />}
			list={<UserDropdownList />}
		/>
	);
};
export default UserDropdown;

const UserDropdownButton = () => {
	return (
		<React.Fragment>
			<span className="row a-centered j-end" style={{ alignSelf: "flex-end" }}>
				<div className="user column a-end sm-hide">
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

const UserDropdownList = () => {
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

			<section className="column">
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
