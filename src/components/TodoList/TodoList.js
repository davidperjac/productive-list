import React from 'react';
import './TodoList.scss';

export const TodoList = (props) => {
	const renderFunction = props.children || props.render;
	return (
		<section className="TodoList">
			{props.filter.length === 0 && props.onEmptySearchTodos(props.search)}
			<ul>{renderFunction}</ul>
		</section>
	);
};
