import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { SearchCountries } from './components/SearchCountries';
import { CountryList } from './components/CountryList';
import { useFetch } from './components/useFetch';
import { CountriesContext } from './CountriesContext';

const App = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const { data, loading, error } = useFetch(
		'https://restcountries.eu/rest/v2/all'
	);

	console.log(
		data
			? data.filter(
					(item) =>
						item.name.toLowerCase().includes(searchTerm) ||
						item.capital.toLowerCase().includes(searchTerm) ||
						item.languages
							.map((language) => language.name)
							.join('')
							.toLowerCase()
							.inclues(searchTerm)
			  )
			: 'nothing'
	);
	return (
		<CountriesContext.Provider value={{ searchTerm, setSearchTerm }}>
			<div>
				<Header text='Countries try ' number={data.length} />
				{error ? (
					<h1>Error</h1>
				) : loading ? (
					<h1>Loading...</h1>
				) : (
					<>
						<SearchCountries />
						<CountryList data={data} />
					</>
				)}
			</div>
		</CountriesContext.Provider>
	);
};

export default App;
