/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer } from 'react';

export function useLocalStorage(itemName, initialValue) {
	const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
	const { sincronizedItem, item } = state;

	const onSuccess = (item) =>
		dispatch({ type: actionTypes.success, payload: item });

	const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });

	const onSincronize = () => dispatch({ type: actionTypes.sincronize });

	useEffect(() => {
		const localStorageItem = localStorage.getItem(itemName);
		let parsedItem;

		if (!localStorageItem) {
			localStorage.setItem(itemName, JSON.stringify(initialValue));
			parsedItem = initialValue;
		} else {
			parsedItem = JSON.parse(localStorageItem);
		}
		onSuccess(parsedItem);
	}, [sincronizedItem]);

	const saveItem = (newItem) => {
		const stringifiedItem = JSON.stringify(newItem);
		localStorage.setItem(itemName, stringifiedItem);
		onSave(newItem);
	};

	const sincronize = () => {
		onSincronize();
	};

	return [item, saveItem, sincronize];
}

const initialState = ({ initialValue }) => ({
	sincronizedItem: true,
	item: initialValue,
});

const actionTypes = {
	success: 'SUCCESS',
	save: 'SAVE',
	sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
	[actionTypes.success]: {
		...state,
		sincronizedItem: true,
		item: payload,
	},
	[actionTypes.save]: {
		...state,
		item: payload,
	},
	[actionTypes.sincronize]: {
		...state,
		sincronizedItem: false,
	},
});

const reducer = (state, action) => {
	return reducerObject(state, action.payload)[action.type] || state;
};
