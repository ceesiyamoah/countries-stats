import React from 'react';

export const Header = ({ text }) => {
	return (
		<div className='header-container'>
			<header className='header-text'>{text}</header>
			<p className='header-subtitle'>THere are 250 countries</p>
		</div>
	);
};
