import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './CreateTodoButton.scss';
import { Modal } from '../Modal/Modal';

export const CreateTodoButton = () => {
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
				{modalOpen && <Modal handleClose={toggleModal} />}
			</AnimatePresence>
		</div>
	);
};
