import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from './Header';

//! Correct Error handling ie do not display the header when there is an error

export const CountryDetails = () => {
	const { country } = useParams();
	const [singleCountry, setsingleCountry] = useState({});
	// const { data, loading, error } = useFetch(
	// 	`https://restcountries.eu/rest/v2/name/${country}?fullText=true`
	// );

	const {
		name,
		capital,
		region,
		subregion,
		population,
		flag,
		languages,
		currencies,
	} = data[0];

	return (
		<div>
			{!error && <Header text={country} />}
			{error ? (
				<h1>No country found</h1>
			) : loading ? (
				<h1>Loading...</h1>
			) : (
				<div className='countryDetails-holder'>
					<div className='details'>
						<p className='image-holder'>
							<img src={flag} alt={name} />
						</p>
						<p className='country-name'>{name}</p>
						<div className='country-text'>
							<p>
								<b>Capital: </b>
								{capital}
							</p>
							<p>
								<b>Language: </b>
								{languages.map((language) => `${language.name},`)}
							</p>
							<p>
								<b>Population: </b>
								{population.toLocaleString()}
							</p>
							<p>
								<b>Currency: </b>
								{currencies.map((currency) => `${currency.name},`)}
							</p>
							<p>
								<b>Continent: </b>
								{region}
							</p>
							<p>
								<b>Sub region: </b>
								{subregion}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
