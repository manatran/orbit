import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface MenuProps {
	authenticated: boolean;
	user: {
		profile: {
			isAdmin: boolean;
		};
	};
}

const Menu: React.FC<MenuProps> = ({ authenticated, user }) => {
	return (
		<>
			<Link to="/challenges" className="row a-centered" title="Feed">
				<i className="material-icons icon">trending_up</i>
				<span>Feed</span>
			</Link>
			<Link to="/submissions" className="row a-centered" title="Submissions">
				<i className="material-icons icon">important_devices</i>
				<span>Submissions</span>
			</Link>

			{authenticated && user.profile.isAdmin && (
				<Link to="/admin" className="row a-centered" title="Dashboard">
					<i className="material-icons icon">verified_user</i>
					<span>Dashboard</span>
				</Link>
			)}

			<Link to="/ask" className="link row a-centered" title="Create post">
				<i className="material-icons icon">create</i>
				<span>Create post</span>
			</Link>

			<Link to="/submit" className="row a-centered" title="Submit">
				<i className="material-icons icon">add_to_photos</i>
				<span>Submit creation</span>
			</Link>
		</>
	);
};

const mapStateToProps = (state: any) => ({
	authenticated: state.auth.authenticated,
	user: state.auth.user,
});

export default connect(mapStateToProps)(Menu);
