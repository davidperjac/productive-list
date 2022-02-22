import { useState, useContext } from 'react';
import { useStorageListener } from './useStorageListener';

import { Modal } from '../Modal/Modal';
import { ThemeContext } from '../../Context/context';

export const ChangeAlert = ({ sincronize }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [show, toggleShow] = useStorageListener(sincronize);

	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	if (show) {
		return (
			<Modal handleClose={toggleModal} className="modalAlert">
				<h2
					style={{
						color: !darkMode ? '#222831' : 'white',
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
