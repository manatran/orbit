import React from "react";
import { Link } from "react-router-dom";
import { AuthButtons, Logo } from "../index";

import "./AuthCard.css";

const AuthCard: React.FC = () => {
	return (
		<section className="auth-card card column centered">
			<Logo size="64px" />
			<h2>Sign up for Orbit!</h2>
			<p>Orbit is completely free to use.</p>
			<p>No credit card required!</p>

			<AuthButtons />

			<p className="light">
				Signing up signifies that you have read and agree to the{" "}
				<Link to="/terms" className="link">
					Terms of Service
				</Link>{" "}
				and{" "}
				<Link to="/privacy" className="link">
					Privacy Policy
				</Link>
				.
			</p>

			<div className="divider row centered">or</div>
			<Link to="/" className="button light">
				Continue as visitor
			</Link>
		</section>
	);
};
export default AuthCard;
