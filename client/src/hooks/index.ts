import { useEffect, useState } from "react";

export const fetchUrl = "http://localhost:5000/api/v1";

export const useTitle = (title: string) => {
	useEffect(() => {
		if (title && title !== "null") {
			document.title = `${title} | Orbit`;
		}

		return () => {
			document.title = "Orbit";
		};
	}, [title]);
};

export const useFetch = (endpoint: string, initialState?: any) => {
	const [data, setData] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setError(false);
			setLoading(true);

			try {
				const res = await fetch(`${fetchUrl}${endpoint}`, {
					headers: {
						Accept: `application/json`,
						"Content-Type": `application/json`,
					},
				});
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

export const useAuthFetch = (
	endpoint: string,
	token: string | null,
	initialState?: any
) => {
	const [data, setData] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setError(false);
			setLoading(true);

			try {
				const res = await fetch(`${fetchUrl}${endpoint}`, {
					headers: {
						Authorization: `Bearer ${token}`,
						Accept: `application/json`,
						"Content-Type": `application/json`,
					},
				});
				const json = await res.json();

				setData(json);
			} catch (error) {
				setError(error);
			}

			setLoading(false);
		};

		fetchData();
	}, [endpoint, token]);

	return [{ data, loading, error }];
};
