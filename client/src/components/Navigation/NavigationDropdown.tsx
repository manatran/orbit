import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Dropdown from "../Dropdown/Dropdown";
import { Menu } from "../index";

const NavigationDropdown: React.FC = () => {
	return (
		<Dropdown
			button={<NavigationDropdownButton />}
			list={<NavigationDropdownList />}
		/>
	);
};
export default NavigationDropdown;

const NavigationDropdownButton = () => {
	return (
		<React.Fragment>
			<span className="row a-centered">
				<i className="material-icons icon">trending_up</i>
				<span className="sm-hide">Feed</span>
			</span>
			<i className="material-icons">arrow_drop_down</i>
		</React.Fragment>
	);
};

const NavigationDropdownList = () => {
	return (
		<>
			<section className="menu">
				<h2 className="small">Navigation</h2>
				<Menu />
			</section>

			{/* TODO: show when authenticated */}

			<section className="favorites">
				<h2 className="small">Favorites</h2>
				<div className="row a-centered j-between">
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
				<div className="row a-centered j-between">
					<Link to="/challenges" className="row a-centered">
						<img src={Logo} alt="Challenges" />
						Subscription
					</Link>
					<i className="material-icons" onClick={() => console.log("clicked!")}>
						favorite
					</i>
				</div>

				<div className="row a-centered j-between">
					<Link to="/challenges" className="row a-centered">
						<img src={Logo} alt="Challenges" />
						Subscription
					</Link>
					<i className="material-icons" onClick={() => console.log("clicked!")}>
						favorite
					</i>
				</div>

				<div className="row a-centered j-between">
					<Link to="/challenges" className="row a-centered">
						<img src={Logo} alt="Challenges" />
						Subscription
					</Link>
					<i className="material-icons" onClick={() => console.log("clicked!")}>
						favorite
					</i>
				</div>
			</section>
		</>
	);
};
