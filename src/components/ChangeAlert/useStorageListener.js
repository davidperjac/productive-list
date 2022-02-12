import { useEffect, useState } from 'react';

export function useStorageListener(sincronize) {
	const [storageChange, setStorageChange] = useState(false);

	useEffect(() => {
		const onChange = (change) => {
			if (change.key === 'TODOS') {
				setStorageChange(true);
			}
		};
		window.addEventListener('storage', onChange);
		return () => {
			window.removeEventListener('storage', onChange);
		};
	}, []);

	const toggleShow = () => {
		sincronize();
		setStorageChange(false);
		window.location.reload();
	};

	return { storageChange, toggleShow };
}
