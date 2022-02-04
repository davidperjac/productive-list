import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { ImCross } from 'react-icons/im';
import './TodoItem.scss';

export const TodoItem = ({ completed, text, onComplete, onDelete }) => {
	return (
		<li>
			<Checkbox onComplete={onComplete} />
			<p
				style={{
					textDecoration: completed ? 'line-through' : '',
				}}
			>
				{text}
			</p>
			<ImCross
				onClick={onDelete}
				style={{ marginRight: '1rem' }}
				className="cross"
			/>
		</li>
	);
};
