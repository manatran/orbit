import React from "react";
import { AuthCard } from "../../components";
import { useTitle } from "../../hooks";

const AuthPage: React.FC = () => {
	useTitle("Signup");

	return (
		<div className="body centered">
			<main>
				<AuthCard />
			</main>
		</div>
	);
};
export default AuthPage;
