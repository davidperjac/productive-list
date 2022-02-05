import React, { useContext } from 'react';

import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

import { TodoContext } from './Context/TodoContext';

export const AppUI = () => {
	const { filter, toggleCompleteTodos, deleteTodos } = useContext(TodoContext);

	return (
		<div className="app">
			<img
				src="./todo.svg"
				alt="todosvg"
				className="svg"
				draggable="false"
			></img>
			<div className="todo">
				<TodoCounter />
				<TodoSearch />
				<TodoList>
					{filter.map((todo, id) => (
						<TodoItem
							completed={todo.completed}
							text={todo.text}
							key={id}
							onComplete={() => toggleCompleteTodos(todo.text)}
							onDelete={() => deleteTodos(todo.text)}
						/>
					))}
				</TodoList>
				<CreateTodoButton />
			</div>
		</div>
	);
};
