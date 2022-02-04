import './App.scss';
import React, { useState } from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

const defaultTodos = [
	{ text: 'Ver curso de Platzi', completed: false },
	{ text: 'Decir a Valeria que la amas', completed: false },
	{ text: 'Organizar cuarto', completed: false },
];

function App() {
	const [todos, setTodos] = useState(defaultTodos);
	const [search, setSearch] = useState('');

	const completedTodos = todos.filter((todo) => todo.completed).length;
	const totalTodos = todos.length;

	const filter = todos.filter((todo) => {
		return todo.text.toLowerCase().includes(search.toLowerCase());
	});

	const getIndex = (text) => {
		return todos.findIndex((todo) => todo.text === text);
	};

	const toggleCompleteTodos = (text) => {
		const todoIndex = getIndex(text);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
		setTodos(newTodos);
	};

	const deleteTodos = (text) => {
		const todoIndex = getIndex(text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
	};

	return (
		<div className="app">
			<img
				src="./todo.svg"
				alt="todosvg"
				className="svg"
				draggable="false"
			></img>
			<div className="todo">
				<TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
				<TodoSearch search={search} setSearch={setSearch} />
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
}

export default App;
