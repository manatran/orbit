import React from "react";
import { SearchResults, Sidebar } from "../../components";
import { useFetch } from "../../hooks";

const SearchPage = () => {
	const param = new URLSearchParams(window.location.search);
	const q = param.get("q");

	const [{ data, loading, error }] = useFetch(`/search/${q}`);

	return (
		<div className="body spaced row">
			<Sidebar />
			<main>
				<SearchResults q={q} results={data} loading={loading} error={error} />
			</main>
		</div>
	);
};
export default SearchPage;
