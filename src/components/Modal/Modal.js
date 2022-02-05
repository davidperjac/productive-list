import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Backdrop } from './Backdrop';
import { ImCross } from 'react-icons/im';
import './modal.scss';

import { TodoContext } from '../../Context/TodoContext';

export const Modal = ({ handleClose }) => {
	const [todo, setTodo] = useState('');
	const [error, setError] = useState(false);
	const { addTodos } = useContext(TodoContext);

	const dropIn = {
		hidden: {
			y: '-100vw',
			opacity: 1,
		},
		visible: {
			y: '0',
			opacity: 1,
			transition: {
				duration: 0.3,
				type: 'spring',
				damping: 100,
				stiffness: 500,
			},
		},
		exit: {
			y: '100vw',
			opacity: 1,
			transition: {
				duration: 0.3,
			},
		},
	};

	const handleEnter = (e) => {
		if (e.charCode === 13) {
			handleSubmit();
		}
	};

	const handleSubmit = () => {
		if (todo === '') {
			setError(true);
		} else {
			addTodos(todo);
			handleClose();
		}
	};

	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className="modal"
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
				onKeyPress={(e) => handleEnter(e)}
				style={
					{
						//backgroundColor: darkMode ? '#191919' : 'white',
					}
				}
			>
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
			</motion.div>
		</Backdrop>
	);
};
