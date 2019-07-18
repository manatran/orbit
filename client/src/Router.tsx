import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthPage, HomePage } from "./pages";

const AppRouter: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Redirect from="/home" to="/" />
			<Route exact path="/signup" component={AuthPage} />
			<Redirect from="/login" to="/signup" />
		</Switch>
	);
};
export default AppRouter;
