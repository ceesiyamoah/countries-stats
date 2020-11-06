import React, { useContext } from 'react';
import { CountriesContext } from './../CountriesContext';

export const SearchCountries = () => {
	const { searchTerm, setSearchTerm } = useContext(CountriesContext);

	return (
		<div className='search-container'>
			<input
				type='text'
				name='searchText'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder='Search countries by name, city an language'
			/>
		</div>
	);
};

//! Add value to input and state to the component
