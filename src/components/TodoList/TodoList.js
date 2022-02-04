import React from 'react';
import './TodoList.scss';

export const TodoList = (props) => {
	return (
		<section>
			<ul>{props.children}</ul>
		</section>
	);
};
