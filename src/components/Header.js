import React from 'react';

export const Header = ({ text, number }) => {
	return (
		<div className='header-container'>
			<header className='header-text'>{text}</header>
			<p className='header-subtitle'>There are {number} countries</p>
		</div>
	);
};
