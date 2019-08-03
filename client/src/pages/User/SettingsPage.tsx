import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Dispatch } from "redux";
import { Settings, Sidebar } from "../../components";
import { useTitle } from "../../hooks";
import { logout } from "../../store/actions";

interface SettingsProps {
	auth: any;
	signout: () => Dispatch;
}

const SettingsPage: React.FC<SettingsProps> = ({ auth, signout }) => {
	useTitle("Settings");

	return (
		<div className="body spaced row">
			<Sidebar />
			<main>
				<Settings token={auth.token} logout={signout} />
				{!auth.authenticated && <Redirect to="/" />}
			</main>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	auth: state.auth,
});

const mapDispatchToProps = (dispatch: any) => {
	return {
		signout: () => dispatch(logout()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsPage);
