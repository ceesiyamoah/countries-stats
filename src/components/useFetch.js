import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		const FetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setData(data);
				setLoading(false);
			} catch (error) {
				setError(true);
			}
		};

		FetchData();
	}, [url]);
	return { data, loading, error };
};
