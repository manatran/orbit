import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "./components";
import {
	AuthPage,
	CallbackPage,
	HomePage,
	PrivacyPage,
	QuestionDetailPage,
	QuestionsOverviewPage,
	SignoutPage,
	TermsPage,
} from "./pages";

const AppRouter: React.FC = () => {
	return (
		<React.Fragment>
			<Navigation />
			<Switch>
				<Redirect from="/home" to="/" />
				<Route exact path="/" component={HomePage} />

				{/* Authentication */}
				<Redirect from="/login" to="/signup" />
				<Route exact path="/signup" component={AuthPage} />
				<Route exact path="/callback" component={CallbackPage} />
				<Route exact path="/signout" component={SignoutPage} />

				{/* Questions */}
				<Route exact path="/subject/:slug" component={QuestionsOverviewPage} />
				<Route exact path="/question/:id" component={QuestionDetailPage} />

				{/* Static */}
				<Route exact path="/terms" component={TermsPage} />
				<Route exact path="/privacy" component={PrivacyPage} />
			</Switch>
		</React.Fragment>
	);
};
export default AppRouter;
