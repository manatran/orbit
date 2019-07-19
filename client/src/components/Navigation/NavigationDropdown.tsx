import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const NavigationDropdown: React.FC = () => {
	// Declare dropdown state variable
	const [dropdown, setDropdown] = useState(false);

	return (
		<section className="dropdown">
			<button
				onClick={() => setDropdown(!dropdown)}
				className={`row j-between ${dropdown && "active"}`}
			>
				<span className="row a-centered">
					<i className="material-icons icon">trending_up</i>
					<span>Feed</span>
				</span>
				<i className="material-icons">arrow_drop_down</i>
			</button>
			{dropdown && (
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
							<i
								className="material-icons"
								onClick={() => console.log("clicked!")}
							>
								favorite
							</i>
						</div>
						<div className="sub row a-centered j-between">
							<Link to="/challenges" className="row a-centered">
								<img src={Logo} alt="Challenges" />
								Subscription
							</Link>
							<i
								className="material-icons"
								onClick={() => console.log("clicked!")}
							>
								favorite
							</i>
						</div>
						<div className="sub row a-centered j-between">
							<Link to="/challenges" className="row a-centered">
								<img src={Logo} alt="Challenges" />
								Subscription
							</Link>
							<i
								className="material-icons"
								onClick={() => console.log("clicked!")}
							>
								favorite
							</i>
						</div>
					</section>
				</section>
			)}
		</section>
	);
};
export default NavigationDropdown;
