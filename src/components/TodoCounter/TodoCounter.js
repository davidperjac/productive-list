import React, { useContext } from 'react';
import './TodoCounter.scss';
import { TodoContext } from '../../Context/TodoContext';
import { AiFillCheckSquare } from 'react-icons/ai';
import { green } from '@material-ui/core/colors';

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
