import React from "react";
import Github from "../../assets/icons/github-white.png";
import Gitlab from "../../assets/icons/gitlab.png";

import "./AuthButtons.css";

const AuthButtons = () => {
	return (
		<div className="auth-btns row centered wrap">
			<a
				href="https://github.com/login/oauth/authorize?client_id=eab9bf60fabbbaad0207"
				className="button gh-login centered"
			>
				<span>Login with GitHub</span>
				<img src={Github} alt="Login with GitHub" />
			</a>

			<a
				href="/"
				className="button gl-login disabled row centered"
				onClick={(e) => e.preventDefault()}
			>
				<span>Login with GitLab</span>
				<img src={Gitlab} alt="Login with GitLab" />
			</a>
		</div>
	);
};
export default AuthButtons;
