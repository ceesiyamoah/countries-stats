import React, { useEffect, useState } from 'react';
import './App.css';
import { CountriesContext } from './CountriesContext';
import { SearchAndDisplayCountries } from './components/SearchAndDisplayCountries';

const App = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch('https://restcountries.eu/rest/v2/all')
			.then((response) => response.json())
			.then((data) => {
				setCountries(data);
				setLoading(false);
			})
			.catch((error) => setError(true));
	}, []);

	return (
		<CountriesContext.Provider value={{ searchTerm, setSearchTerm }}>
			<SearchAndDisplayCountries
				data={countries}
				headerText='Welcome to the countries hub'
				loading={loading}
				error={error}
			/>
		</CountriesContext.Provider>
	);
};

export default App;
