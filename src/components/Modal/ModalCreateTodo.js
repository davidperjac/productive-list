import React, { useState } from 'react';
import { Modal } from './Modal';
import { ImCross } from 'react-icons/im';
import './ModalCreateTodo.scss';

export const ModalCreateTodo = ({ handleClose, addTodos }) => {
	const [todo, setTodo] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = () => {
		if (todo === '') {
			setError(true);
		} else {
			addTodos(todo);
			handleClose();
		}
	};

	return (
		<Modal handleClose={handleClose} handleSubmit={handleSubmit}>
			<ImCross
				onClick={handleClose}
				style={{ marginRight: '1rem' }}
				className="cross"
			/>
			<h1>Write your new TODO</h1>
			{error && <h2 style={{ color: 'red' }}>Write something else!</h2>}
			<input
				placeholder="Drink water"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			></input>
			<button onClick={handleSubmit}>Add</button>
		</Modal>
	);
};
