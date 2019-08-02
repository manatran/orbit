import React from "react";
import { connect } from "react-redux";
import { Subcomment } from "../index";
import { SubcommentProps } from "./Subcomment";

interface SubcommentsListProps {
	auth: any;
	subcomments: SubcommentProps[];
	loading: boolean;
	error: boolean;
	hue: number;
}

const SubcommentsList: React.FC<SubcommentsListProps> = ({
	auth,
	subcomments,
	loading,
	error,
	hue,
}) => {
	return (
		<div className="subcomments">
			{!loading && !error && subcomments && subcomments.length > 0 && (
				<>
					{subcomments.map((el: any, i: number) => (
						<Subcomment
							key={el.id}
							id={el.id}
							content={el.content}
							author={el.author || auth.user.profile}
							timestamp={el.createdAt}
							hue={hue}
						/>
					))}
				</>
			)}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(SubcommentsList);
