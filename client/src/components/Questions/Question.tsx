import React from "react";

export interface QuestionProps {
	id: number;
	title: string;
	likes: number;
	subject: {
		name: string;
		thumbnail: string;
		slug: string;
	};
	author: string;
	timestamp: Date;
}

const Question: React.FC<QuestionProps> = ({
	id,
	title,
	likes,
	subject,
	author,
	timestamp,
}) => {
	return (
		<div className="question">
			<p>{title}</p>
		</div>
	);
};
export default Question;
