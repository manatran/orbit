import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const NavigationDropdown: React.FC = () => {
	return (
		<section className="list column">
			<section className="menu">
				<h2 className="small">Navigation</h2>
				<Link to="/challenges" className="row a-centered">
					<i className="material-icons icon">important_devices</i>
					Challenges
				</Link>
				<Link to="/suggestions" className="row a-centered">
					<i className="material-icons icon">wb_incandescent</i>
					Suggestions
				</Link>
			</section>

			<section className="favorites">
				<h2 className="small">Favorites</h2>
				<div className="sub row a-centered j-between">
					<Link to="/challenges" className="row a-centered">
						<img src={Logo} alt="Challenges" />
						Subscription
					</Link>
					<i
						className="material-icons fav"
						onClick={() => console.log("clicked!")}
					>
						favorite
					</i>
				</div>
			</section>

			<section className="subscriptions">
				<h2 className="small">Subscriptions</h2>
				<div className="sub row a-centered j-between">
					<Link to="/challenges" className="row a-centered">
						<img src={Logo} alt="Challenges" />
						Subscription
					</Link>
					<i className="material-icons" onClick={() => console.log("clicked!")}>
						favorite
					</i>
				</div>
				<div className="sub row a-centered j-between">
					<Link to="/challenges" className="row a-centered">
						<img src={Logo} alt="Challenges" />
						Subscription
					</Link>
					<i className="material-icons" onClick={() => console.log("clicked!")}>
						favorite
					</i>
				</div>
				<div className="sub row a-centered j-between">
					<Link to="/challenges" className="row a-centered">
						<img src={Logo} alt="Challenges" />
						Subscription
					</Link>
					<i className="material-icons" onClick={() => console.log("clicked!")}>
						favorite
					</i>
				</div>
			</section>
		</section>
	);
};
export default NavigationDropdown;
