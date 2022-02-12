import React from 'react';
import './TodoCounter.scss';

export const TodoCounter = ({ completedTodos, totalTodos, style }) => {
	return (
		<div>
			<h2 className="text" style={style}>
				Completed : {completedTodos} / {totalTodos} Todos{' '}
			</h2>
		</div>
	);
};
