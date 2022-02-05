import React, { useContext } from 'react';
import './TodoCounter.scss';
import { TodoContext } from '../../Context/TodoContext';

export const TodoCounter = () => {
	const { completedTodos, totalTodos } = useContext(TodoContext);
	return (
		<div>
			<h2 className="text">
				You've completed {completedTodos} of {totalTodos} Todos{' '}
			</h2>
		</div>
	);
};
