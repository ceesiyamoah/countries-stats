import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { SearchCountries } from './components/SearchCountries';
import { CountryList } from './components/CountryList';
import { useFetch } from './components/useFetch';

const App = () => {
	const { data, loading, error } = useFetch(
		'https://restcountries.eu/rest/v2/all'
	);
	console.log(data);
	return (
		<div>
			<Header text='Countries try ' />
			{error ? (
				<h1>Error</h1>
			) : loading ? (
				<h1>Loading...</h1>
			) : (
				<CountryList {...data} />
			)}
		</div>
	);
};

export default App;
