import { useEffect, useState } from "react";

const fetchUrl = "http://localhost:5000/api/v1";

export const useFetch = (endpoint: string, initialState?: any) => {
	const [data, setData] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setError(false);
			setLoading(true);

			try {
				const res = await fetch(`${fetchUrl}${endpoint}`);
				const json = await res.json();

				setData(json);
			} catch (error) {
				setError(error);
			}

			setLoading(false);
		};

		fetchData();
	}, [endpoint]);

	return [{ data, loading, error }];
};
