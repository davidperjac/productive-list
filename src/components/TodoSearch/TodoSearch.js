import React from 'react';
import './TodoSearch.scss';

export const TodoSearch = ({ search, setSearch }) => {
	const onSearchChange = (event) => {
		console.log(event.target.value);
		setSearch(event.target.value);
	};

	return (
		<div>
			<input value={search} placeholder="Search..." onChange={onSearchChange} />
			<p>{search}</p>
		</div>
	);
};
