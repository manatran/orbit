import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Dispatch } from "redux";
import { Spinner } from "../../components";
import { logout } from "../../store/actions";

interface SignoutProps {
	signout: () => Dispatch;
}

const SignoutPage: React.FC<SignoutProps> = ({ signout }) => {
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		signout();
		setRedirect(true);
	}, []);

	return (
		<main style={{ marginTop: `64px` }}>
			{redirect ? <Redirect to="/" /> : <Spinner />}
		</main>
	);
};

const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		signout: () => dispatch(logout()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignoutPage);
