import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './CreateTodoButton.scss';
import { ModalCreateTodo } from '../Modal/ModalCreateTodo';

export const CreateTodoButton = ({ addTodos }) => {
	const [modalOpen, setModalOpen] = useState(false);

	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	return (
		<div>
			<button className="CreateTodoButton" onClick={toggleModal}>
				+
			</button>
			<AnimatePresence
				initial={false}
				exitBeforeEnter={true}
				onExitComplete={() => null}
			>
				{modalOpen && (
					<ModalCreateTodo handleClose={toggleModal} addTodos={addTodos} />
				)}
			</AnimatePresence>
		</div>
	);
};
