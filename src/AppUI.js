import React, { useContext } from 'react';

import { ChangeAlert } from './components/ChangeAlert/ChangeAlert';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoList } from './components/TodoList/TodoList';
import { TodoSearch } from './components/TodoSearch/TodoSearch';

import { Switch } from './components/Switch/Switch';
import { ThemeContext } from './Context/context';

import { Header } from './components/Header/Header';
import { useTodos } from './hooks/useTodos';
import SVG from './todoSVG.svg';

export const AppUI = () => {
	const { states, stateSetters } = useTodos();

	const { totalTodos, completedTodos, search, filter } = states;

	const { setSearch, toggleCompleteTodos, deleteTodos, addTodos, sincronize } =
		stateSetters;

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const darkStyle = { backgroundColor: darkMode ? '#222831' : '#EEEEEE' };

	const darkStyleText = {
		color: darkMode ? '#EEEEEE' : '#222831',
		textAlign: 'center',
	};

	return (
		<div className="app" style={darkStyle}>
			<Switch />
			<Header
				completedTodos={completedTodos}
				totalTodos={totalTodos}
				darkStyleText={darkStyleText}
			/>
			<div className="wrapper">
				<img src={SVG} alt="todosvg" className="svg" draggable="false"></img>
				<div className="todo">
					<h2>
						Organize Your <span style={{ color: '#00ADB5' }}>Tasks</span>
					</h2>
					<TodoSearch search={search} setSearch={setSearch} />
					<TodoList
						search={search}
						onEmptySearchTodos={(searchText) => (
							<h2 style={{ color: 'red' }}>No results for {searchText} :(</h2>
						)}
						filter={filter}
					>
						{filter.map((todo) => (
							<TodoItem
								key={todo.text}
								text={todo.text}
								completed={todo.completed}
								onComplete={() => toggleCompleteTodos(todo.text)}
								onDelete={() => deleteTodos(todo.text)}
							/>
						))}
					</TodoList>
					<CreateTodoButton addTodos={addTodos} />
					<ChangeAlert sincronize={sincronize} />
				</div>
			</div>
			<h3 style={darkStyleText}>Powered by David Perez</h3>
		</div>
	);
};
