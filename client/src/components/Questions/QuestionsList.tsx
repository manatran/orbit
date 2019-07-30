import React from "react";
import { Question, ScrollTop, Skeleton } from "../index";
import { QuestionProps } from "./Question";

interface QuestionsListProps {
	questions: QuestionProps[];
	loading: boolean;
	error: boolean;
}

const QuestionsList: React.FC<QuestionsListProps> = ({
	questions,
	loading,
	error,
}) => {
	return (
		<div className="questions">
			{loading && <QuestionSkeleton />}
			{error && <QuestionError />}

			{!loading && !error && questions && questions.length > 0 ? (
				<>
					{questions.map((el: any) => (
						<Question
							key={el.id}
							id={el.id}
							title={el.title}
							subject={el.subject}
							likes={el.totalLikes}
							author={el.author}
							timestamp={el.createdAt}
						/>
					))}
					<ScrollTop />
				</>
			) : (
				<p className="light">No posts yet!</p>
			)}
		</div>
	);
};
export default QuestionsList;

const QuestionSkeleton = () => {
	return (
		<div>
			<Skeleton />
			<Skeleton />
			<Skeleton />
		</div>
	);
};

const QuestionError = () => {
	return <p className="light">Something went wrong. Please try again later.</p>;
};
