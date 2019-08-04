import React from "react";
import { AuthButtons, Logo } from "..";

import "./Header.css";

const Header: React.FC = () => {
	return (
		<header className="row centered wrap">
			<div className="intro column">
				<h1>Welcome to Orbit!</h1>
				<p>
					Join our community of fellow developers in learning and sharing
					knowledge.
				</p>
				<p>Join the conversation!</p>
			</div>
			<div className="login-btns column centered">
				<Logo />
				<h2>Join our community today!</h2>
				<AuthButtons />
			</div>
		</header>
	);
};
export default Header;
