import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "./components";
import {
	AskPage,
	AuthPage,
	CallbackPage,
	DashboardPage,
	HomePage,
	PrivacyPage,
	ProfilePage,
	QuestionDetailPage,
	QuestionsOverviewPage,
	ReportPage,
	SettingsPage,
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

				{/* Profile */}
				<Route exact path="/user/:user" component={ProfilePage} />
				<Route exact path="/settings" component={SettingsPage} />

				{/* Questions */}
				<Route exact path="/ask" component={AskPage} />
				<Route exact path="/subject/:slug" component={QuestionsOverviewPage} />
				<Route exact path="/question/:id" component={QuestionDetailPage} />

				{/* Report */}
				<Route exact path="/report/:id" component={ReportPage} />

				{/* Admin */}
				<Route exact path="/admin" component={DashboardPage} />

				{/* Static */}
				<Route exact path="/terms" component={TermsPage} />
				<Route exact path="/privacy" component={PrivacyPage} />

				{/* 404 Fallback */}
				<Redirect from="*" to="/" />
			</Switch>
		</React.Fragment>
	);
};
export default AppRouter;
