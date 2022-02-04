import React from 'react';
import './TodoCounter.scss';

export const TodoCounter = ({ completedTodos, totalTodos }) => {
	return (
		<div>
			<h2 className="text">
				You've completed {completedTodos} of {totalTodos} Todos
			</h2>
		</div>
	);
};
