import React from 'react';

export const Country = () => {
	return (
		<>
			<div className='country-holder'>
				<p className='image-holder'>
					<img src='https://restcountries.eu/data/afg.svg' alt='test' />
				</p>
				<p className='country-name'>name</p>
				<div className='country-text'>
					<p>
						<b>capital</b>
					</p>
					<p>langu</p>
					<p>population</p>
					<p>currency</p>
				</div>
			</div>
		</>
	);
};
