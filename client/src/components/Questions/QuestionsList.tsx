import React from "react";
import { Question } from "../index";
import { QuestionProps } from "./Question";

interface QuestionsListProps {
	questions: QuestionProps[];
}

const QuestionsList: React.FC<QuestionsListProps> = ({ questions }) => {
	return (
		<div className="questions">
			{questions.length > 0 ? (
				questions.map((el: any) => (
					<Question
						key={el.id}
						id={el.id}
						title={el.title}
						subject={el.subject}
						likes={el.totalLikes}
						author={el.author}
						timestamp={el.createdAt}
					/>
				))
			) : (
				<p className="light">No posts yet!</p>
			)}
		</div>
	);
};
export default QuestionsList;
