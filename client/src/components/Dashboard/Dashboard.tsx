import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { useTitle } from "../../hooks";

import Categories from "./Categories";
import Contests from "./Contests";
import Reports from "./Reports";

import "./Dashboard.css";

interface DashboardProps {
	auth: any;
}

const Dashboard: React.FC<DashboardProps> = ({ auth }) => {
	const [tab, setTab] = useState("reports");
	const [redirect, setRedirect] = useState(false);

	useTitle("Dashboard");

	useEffect(() => {
		if (!auth.authenticated || !auth.user.profile.isAdmin) setRedirect(true);
	}, [auth]);

	return (
		<section className="body spaced row">
			{/* TODO: make responsive */}
			<aside className="vertical-tabs column">
				<button
					className={tab === "reports" ? "active" : ""}
					onClick={() => setTab("reports")}
				>
					Reports
				</button>
				<button
					className={tab === "categories" ? "active" : ""}
					onClick={() => setTab("categories")}
				>
					Categories
				</button>
				<button
					className={tab === "contests" ? "active" : ""}
					onClick={() => setTab("contests")}
				>
					Contests
				</button>
			</aside>

			<main>
				<RenderContent auth={auth} tab={tab} />
			</main>
			{redirect && <Redirect to="/" />}
		</section>
	);
};

interface ContentProps {
	auth: any;
	tab: string;
}

const RenderContent: React.FC<ContentProps> = ({ auth, tab }) => {
	switch (tab) {
		case "categories":
			return <Categories auth={auth} />;
		case "contests":
			return <Contests />;
		case "reports":
		default:
			return <Reports auth={auth} />;
	}
};

const mapStateToProps = (state: any) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
