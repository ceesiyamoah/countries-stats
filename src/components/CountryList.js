import React from 'react';
import { Country } from './Country';

export const CountryList = ({ data }) => {
	return (
		<div>
			<div className='countries-holder'>
				{data.map((country) => (
					<Country key={country.name} {...country} />
				))}
			</div>
		</div>
	);
};
