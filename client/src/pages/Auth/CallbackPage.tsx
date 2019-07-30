import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Dispatch } from "redux";
import { Spinner } from "../../components";
import { useAuthFetch } from "../../hooks";
import { setCurrentUser, setToken } from "../../store/actions";

interface CallbackProps {
	location: {
		search: any;
	};
	history: any;
	authenticated: boolean;
	saveCurrentUser: (value: any) => Dispatch;
	saveToken: (value: string) => Dispatch;
}

const CallbackPage: React.FC<CallbackProps> = ({
	location,
	history,
	authenticated,
	saveCurrentUser,
	saveToken,
}) => {
	const token = new URLSearchParams(location.search).get("token");
	const [{ data, loading, error }] = useAuthFetch("/user", token, null);

	useEffect(() => {
		if (data) {
			saveToken(`Bearer ${token}`);
			saveCurrentUser(data);
			history.push("/");
		}
	}, [data, history, saveCurrentUser, saveToken]);

	return (
		<main style={{ marginTop: `64px` }}>
			{authenticated && <Redirect to="/" />}

			{!loading && (!token || error) ? (
				<Redirect to="/" />
			) : (
				<Spinner size={64} />
			)}
		</main>
	);
};

const mapStateToProps = (state: any) => ({
	authenticated: state.auth.authenticated,
});

const mapDispatchToProps = (dispatch: any) => {
	return {
		saveCurrentUser: (userData: any) => dispatch(setCurrentUser(userData)),
		saveToken: (token: string) => dispatch(setToken(token)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CallbackPage);
