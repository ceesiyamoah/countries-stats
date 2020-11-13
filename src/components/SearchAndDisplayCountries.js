import React, { useContext, useEffect, useState } from 'react';
import { Header } from './Header';
import { SearchCountries } from './SearchCountries';
import { CountryList } from './CountryList';
import { CountriesContext } from '../CountriesContext';

export const SearchAndDisplayCountries = ({
	data,
	loading,
	error,
	headerText,
}) => {
	const { searchTerm } = useContext(CountriesContext);
	const [filteredData, setFilteredData] = useState(data);

	//! Filtering data based on country name, capital and languages
	useEffect(() => {
		setFilteredData(
			data.filter(
				(item) =>
					item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					item.capital.toLowerCase().includes(searchTerm.toLowerCase()) ||
					item.languages
						.map((lang) => lang.name.toLowerCase())
						.join('')
						.includes(searchTerm)
			)
		);
	}, [searchTerm, data]);

	return (
		<>
			<div>
				<Header text={headerText} number={data.length} />
				{error ? (
					<h1>Error</h1>
				) : loading ? (
					<h1>Loading...</h1>
				) : (
					<>
						<SearchCountries />
						<CountryList data={filteredData} />
					</>
				)}
			</div>
		</>
	);
};
