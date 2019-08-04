import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Profile, ProfileSidebar, Spinner } from "../../components";
import { useFetch, useTitle } from "../../hooks";

interface ProfileProps {
	auth: any;
	match: any;
}

const ProfilePage: React.FC<ProfileProps> = ({ auth, match }) => {
	const slug = match.params.user;
	const [{ data }] = useFetch(`/user/${slug}`, null);

	useTitle(`${data && data.login}`);

	return (
		<div className="body spaced row">
			{data && !data.error ? (
				<>
					<ProfileSidebar user={data} currUser={auth.user} />
					<main>
						<Profile id={data.profile.id} />
					</main>
				</>
			) : (
				<>
					<Spinner size={64} />
					{data && data.error && <Redirect to="/" />}
				</>
			)}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(ProfilePage);
