import React from "react";
import { Link } from "react-router-dom";
import Badge from "../../assets/icons/badge-admin.png";

import "./ProfileSidebar.css";

interface ProfileSidebarProps {
	user: any;
	currUser: any;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ user, currUser }) => {
	return (
		<aside className="profile-sidebar">
			<section className="meta column md-row">
				<img src={user.avatar_url} alt={user.login} />
				<div>
					<h2>{user.login}</h2>
					<p className="rep">{user.profile.reputation} rep</p>
					<p className="bio">{user.bio}</p>

					{user.profile.id === currUser.profile.id && (
						<Link to="/settings" className="button light">
							Settings
						</Link>
					)}
				</div>
			</section>

			{user.profile.isAdmin && (
				<section className="badges sm-hide">
					<div className="row a-centered">
						<img src={Badge} alt="admin" />
						<h4>Moderator</h4>
					</div>
				</section>
			)}
		</aside>
	);
};
export default ProfileSidebar;
