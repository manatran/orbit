import React from "react";
import { useFetch } from "../../hooks";

const Contests = () => {
	const [{ data }] = useFetch("/challenges", []);

	return (
		<section className="contests">
			<h2>Contests</h2>
			<p>contests</p>
		</section>
	);
};
export default Contests;
