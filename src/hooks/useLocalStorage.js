import { useEffect, useState } from 'react';

export function useLocalStorage(itemName, initialValue) {
	const [sincronizedItem, setSincronizedItem] = useState(true);
	const localStorageItem = localStorage.getItem(itemName);

	let parsedItem;

	useEffect(() => {
		if (!localStorageItem) {
			localStorage.setItem(itemName, JSON.stringify(initialValue));
			parsedItem = initialValue;
		} else {
			parsedItem = JSON.parse(localStorageItem);
		}
		setSincronizedItem(true);
	}, [sincronizedItem]);

	if (!localStorageItem) {
		localStorage.setItem(itemName, JSON.stringify(initialValue));
		parsedItem = initialValue;
	} else {
		parsedItem = JSON.parse(localStorageItem);
	}

	const [item, setItem] = useState(parsedItem);

	const saveItem = (newItem) => {
		const stringifiedItem = JSON.stringify(newItem);
		localStorage.setItem(itemName, stringifiedItem);
		setItem(newItem);
	};

	const sincronize = () => {
		setSincronizedItem(false);
	};

	return [item, saveItem, sincronize];
}
