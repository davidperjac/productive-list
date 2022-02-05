import React, { useContext } from 'react';
import './TodoSearch.scss';
import { TodoContext } from '../../Context/TodoContext';

export const TodoSearch = () => {
	const { search, setSearch } = useContext(TodoContext);

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
