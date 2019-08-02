import React from "react";
import { connect } from "react-redux";
import { Comment, Skeleton } from "../index";
import { CommentProps } from "./Comment";

interface CommentsListProps {
	auth: any;
	comments: CommentProps[];
	loading: boolean;
	error: boolean;
}

const CommentsList: React.FC<CommentsListProps> = ({
	auth,
	comments,
	loading,
	error,
}) => {
	return (
		<div className="Comments">
			{loading && <CommentSkeleton />}
			{error && <CommentError />}

			{!loading && !error && comments && comments.length > 0 ? (
				<>
					{comments.map((el: any, i: number) => (
						<Comment
							key={el.id}
							id={el.id}
							content={el.content}
							author={el.author || auth.user.profile}
							timestamp={el.createdAt}
							hue={(30 * i) % 360}
						/>
					))}
				</>
			) : (
				<p className="light">No comments yet!</p>
			)}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(CommentsList);

const CommentSkeleton = () => {
	return (
		<div>
			<Skeleton />
			<Skeleton />
			<Skeleton />
		</div>
	);
};

const CommentError = () => {
	return <p className="light">Something went wrong. Please try again later.</p>;
};
