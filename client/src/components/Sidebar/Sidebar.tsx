import React from "react";
import { Link } from "react-router-dom";
import { Sub } from "../../components";
import { useFetch } from "../../hooks";
import github from "./../../assets/icons/github.png";
import linkedin from "./../../assets/icons/linkedin.png";
import twitter from "./../../assets/icons/twitter.png";
import website from "./../../assets/icons/website.png";

import "./Sidebar.css";

const Sidebar: React.FC = () => {
	// Fetch categories
	const [{ data }] = useFetch("/category/popular", []);

	return (
		<aside className="column">
			<Link to="/ask" className="button">
				Ask a question
			</Link>
			<Link to="/ask" className="button light">
				Submit your creation
			</Link>

			<section className="popular">
				{data.length > 0 && (
					<>
						<h2>Popular categories</h2>
						{data.map((sub: any) => (
							<Sub
								key={sub.id}
								slug={sub.slug}
								icon={sub.thumbnail}
								title={sub.name}
								subs={sub.subscribers}
							/>
						))}
					</>
				)}
			</section>

			<footer>
				<section className="nav row">
					<div className="column">
						<Link to="/">Feed</Link>
						<Link to="/challenges">Code challenges</Link>
						<Link to="/suggestions">Challenge suggestions</Link>
					</div>
					<div className="column">
						<Link to="/privacy">Privacy policy</Link>
						<Link to="/terms">Terms of use</Link>
					</div>
				</section>

				<section className="social row">
					<a
						href="https://manatran.github.io"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={website} alt="Website" />
					</a>
					<a
						href="https://twitter.com/manaus_t"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={twitter} alt="Twitter" />
					</a>
					<a
						href="https://github.com/manatran"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={github} alt="GitHub" />
					</a>
					<a
						href="https://www.linkedin.com/in/manaustransez/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={linkedin} alt="Linkedin" />
					</a>
				</section>

				<section className="copy">
					<p>&copy; 2019 Manaus Transez</p>
					<p>All rights reserved.</p>
				</section>
			</footer>
		</aside>
	);
};
export default Sidebar;
