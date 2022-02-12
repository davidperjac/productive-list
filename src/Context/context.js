import React, { createContext, useReducer } from 'react';

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

export const ThemeProvider = (props) => {
	const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{props.children}
		</ThemeContext.Provider>
	);
};
