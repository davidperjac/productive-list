import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import './Header.scss';

export const Header = (props) => {
	let today = new Date();

	var months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const dd = String(today.getDate()).padStart(2, '0');
	const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	const yyyy = today.getFullYear();

	today = months[mm - 1] + ' ' + dd + ' , ' + yyyy;
	return (
		<div className="header">
			<h2 style={props.darkStyleText} className="date">
				{today}
			</h2>
			<TodoCounter
				completedTodos={props.completedTodos}
				totalTodos={props.totalTodos}
				style={props.darkStyleText}
			/>
		</div>
	);
};
