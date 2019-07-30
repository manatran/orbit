import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "./components";
import {
	AuthPage,
	HomePage,
	PrivacyPage,
	QuestionsOverviewPage,
	TermsPage,
} from "./pages";

const AppRouter: React.FC = () => {
	return (
		<React.Fragment>
			<Navigation />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Redirect from="/home" to="/" />

				{/* Authentication */}
				<Route exact path="/signup" component={AuthPage} />
				<Redirect from="/login" to="/signup" />

				{/* Questions */}
				<Route exact path="/subject/:slug" component={QuestionsOverviewPage} />

				{/* Static */}
				<Route exact path="/terms" component={TermsPage} />
				<Route exact path="/privacy" component={PrivacyPage} />
			</Switch>
		</React.Fragment>
	);
};
export default AppRouter;
