import React from 'react';
import './CreateTodoButton.scss';

export const CreateTodoButton = (props) => {
	const onClickButton = () => {
		alert('Open Modal');
	};

	return (
		<button className="CreateTodoButton" onClick={() => onClickButton()}>
			+
		</button>
	);
};
