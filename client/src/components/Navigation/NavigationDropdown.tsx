import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks";
import Dropdown from "../Dropdown/Dropdown";
import { Menu } from "../index";

interface DropdownProps {
	authenticated: boolean;
}

const NavigationDropdown: React.FC<DropdownProps> = ({ authenticated }) => {
	return (
		<Dropdown
			button={<NavigationDropdownButton />}
			list={<NavigationDropdownList authenticated={authenticated} />}
		/>
	);
};

const mapStateToProps = (state: any) => ({
	authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(NavigationDropdown);

const NavigationDropdownButton = () => {
	return (
		<React.Fragment>
			<span className="row a-centered">
				<i className="material-icons icon">trending_up</i>
				{/* Make dynamic */}
				<span className="sm-hide">Feed</span>
			</span>
			<i className="material-icons">arrow_drop_down</i>
		</React.Fragment>
	);
};

const NavigationDropdownList: React.FC<DropdownProps> = ({ authenticated }) => {
	const [{ data }] = useFetch("/categories", []);

	return (
		<>
			<section className="menu">
				<h2 className="small">Navigation</h2>
				<Menu />
			</section>

			{authenticated && data && (
				<section className="subscriptions">
					<h2 className="small">Subjects</h2>

					{data &&
						!data.error &&
						data
							.sort((a: any, b: any) => {
								if (a.name < b.name) return -1;
								if (a.name > b.name) return 1;
								return 0;
							})
							.map((el: any) => (
								<div key={el.id} className="row a-centered j-between">
									<Link to={`/subject/${el.slug}`} className="row a-centered">
										<img src={el.thumbnail} alt="Challenges" />
										{el.name}
									</Link>
								</div>
							))}
				</section>
			)}
		</>
	);
};
