import { useState } from 'react';
import { useStorageListener } from './useStorageListener';

import { Modal } from '../Modal/Modal';

export const ChangeAlert = ({ sincronize }) => {
	const [modalOpen, setModalOpen] = useState(false);

	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	const { show, toggleShow } = useStorageListener(sincronize);

	if (show) {
		return (
			<Modal handleClose={toggleModal} className="modalAlert">
				<h2
					style={{
						color: 'white',
						marginBottom: '3rem',
						marginTop: '8rem',
						textAlign: 'center',
					}}
				>
					There has been changes in the TODOs in another window of the
					application
				</h2>
				<button className="CreateTodoButton" onClick={toggleShow}>
					Update my TODOs
				</button>
			</Modal>
		);
	}
	return null;
};
