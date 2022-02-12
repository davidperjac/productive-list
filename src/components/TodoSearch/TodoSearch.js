import React from 'react';
import './TodoSearch.scss';

export const TodoSearch = ({ search, setSearch }) => {
	const onSearchChange = (event) => {
		setSearch(event.target.value);
	};

	return (
		<div>
			<input
				spellCheck="false"
				value={search}
				placeholder="Filter..."
				onChange={onSearchChange}
			/>
		</div>
	);
};
