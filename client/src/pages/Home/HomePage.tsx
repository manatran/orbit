import React from "react";
import { Header, Sidebar } from "../../components";

const HomePage: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<div className="body row">
				<Sidebar />

				<main>
					<p>body</p>
				</main>
			</div>
		</React.Fragment>
	);
};
export default HomePage;
