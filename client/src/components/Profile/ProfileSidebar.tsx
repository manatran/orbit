import React from "react";
import Badge from "../../assets/icons/badge-admin.png";

import "./ProfileSidebar.css";

interface ProfileSidebarProps {
	user: any;
	currUser: any;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ user, currUser }) => {
	return (
		<aside className="profile-sidebar">
			<section className="meta">
				<img src={user.avatar_url} alt={user.login} />
				<h2>{user.login}</h2>
				<p className="rep">{user.profile.reputation} rep</p>
				<p className="bio">{user.bio}</p>
			</section>

			{user.profile.isAdmin && (
				<section className="badges">
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
