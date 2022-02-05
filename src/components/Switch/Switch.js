import React, { useContext } from 'react';

import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';

import { ThemeContext } from '../../Context/TodoContext';

import './Switch.scss';

export const Switch = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const toggleSwitch = () => {
		theme.dispatch({ type: 'TOGGLE' });
	};

	return (
		<div className="icon">
			{darkMode ? (
				<MdDarkMode className="darkMode" onClick={toggleSwitch} />
			) : (
				<BsFillSunFill
					className="lightMode"
					onClick={toggleSwitch}
					style={{ color: '#393E46' }}
				/>
			)}
		</div>
	);
};
