import React, { createContext, useState, useReducer } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const TodoContext = createContext();
export const ThemeContext = createContext();

const INITIAL_STATE = {
	darkMode: new Date().getHours() > 19 || new Date().getHours() < 6,
};

const themeReducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE':
			return { darkMode: !state.darkMode };
		default:
			return state;
	}
};

export const TodoProvider = (props) => {
	const [todos, saveTodos] = useLocalStorage('TODOS', []);
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
		saveTodos(newTodos);
	};

	const addTodos = (text) => {
		const todo = { text: text, completed: false };
		const newTodos = [...todos];
		newTodos.push(todo);
		saveTodos(newTodos);
	};

	const deleteTodos = (text) => {
		const todoIndex = getIndex(text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	return (
		<TodoContext.Provider
			value={{
				completedTodos,
				totalTodos,
				search,
				setSearch,
				filter,
				toggleCompleteTodos,
				deleteTodos,
				addTodos,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export const ThemeProvider = (props) => {
	const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{props.children}
		</ThemeContext.Provider>
	);
};
