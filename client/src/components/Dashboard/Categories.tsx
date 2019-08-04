import React from "react";
import { useFetch } from "../../hooks";

const Categories = () => {
	const [{ data }] = useFetch("/categories", []);

	return (
		<section className="categories">
			<h2>Categories</h2>
			<p>categories</p>
		</section>
	);
};
export default Categories;
