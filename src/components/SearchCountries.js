import React from 'react';

export const SearchCountries = () => {
	return (
		<div className='search-container'>
			<input
				type='text'
				name='searchText'
				placeholder='Search countries by name, city an language'
			/>
		</div>
	);
};

//! Add value to input and state to the component
