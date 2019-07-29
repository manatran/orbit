import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
	return (
		<>
			<Link to="/challenges" className="row a-centered" title="Challenges">
				<i className="material-icons icon">important_devices</i>
				<span>Challenges</span>
			</Link>
			<Link to="/suggestions" className="row a-centered" title="Suggestions">
				<i className="material-icons icon">wb_incandescent</i>
				<span>Suggestions</span>
			</Link>
			{/* TODO: only when admin */}
			<Link to="/admin" className="row a-centered" title="Dashboard">
				<i className="material-icons icon">verified_user</i>
				<span>Dashboard</span>
			</Link>
			<Link to="/ask" className="link row a-centered" title="Create post">
				<i className="material-icons icon">create</i>
				<span>Create post</span>
			</Link>
		</>
	);
};
export default Menu;
