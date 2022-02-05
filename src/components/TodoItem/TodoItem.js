import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { ImCross } from 'react-icons/im';
import { BsFillTrashFill } from 'react-icons/bs';
import './TodoItem.scss';

export const TodoItem = ({ completed, text, onComplete, onDelete }) => {
	return (
		<li>
			<Checkbox onComplete={onComplete} text={text} />
			<p
				style={{
					textDecoration: completed ? 'line-through' : '',
				}}
			>
				{text}
			</p>
			<BsFillTrashFill
				onClick={onDelete}
				style={{ marginRight: '1rem' }}
				className="trash"
			/>
		</li>
	);
};
