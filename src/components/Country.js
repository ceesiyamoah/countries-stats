import React from 'react';

export const Country = ({
	name,
	capital,
	languages,
	population,
	currencies,
	flag,
}) => {
	return (
		<>
			<div className='country-holder'>
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
						{languages.name}
					</p>
					<p>
						<b>Population: </b>
						{population.toLocaleString()}
					</p>
					<p>
						<b>Currency: </b>
						{currencies[0].name}
					</p>
				</div>
			</div>
		</>
	);
};
