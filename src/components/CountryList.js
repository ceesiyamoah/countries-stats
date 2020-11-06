import React from 'react';
import { Country } from './Country';
import { SearchCountries } from './SearchCountries';

const tryA = [1, 2, 3, 4, 5];
export const CountryList = () => {
	return (
		<div>
			<SearchCountries />
			<div className='countries-holder'>
				{tryA.map((item) => (
					<Country key={item} />
				))}
			</div>
		</div>
	);
};
