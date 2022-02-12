import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Backdrop } from './Backdrop';

import { ThemeContext } from '../../Context/context';
import './Modal.scss';

export const Modal = (props) => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

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
			props.handleSubmit();
		}
	};

	return (
		<Backdrop onClick={props.handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className="modal"
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
				onKeyPress={(e) => handleEnter(e)}
				style={{
					backgroundColor: darkMode ? '#222831' : '#EEEEEE',
					color: darkMode ? '#EEEEEE' : '#222831',
				}}
			>
				{props.children}
			</motion.div>
		</Backdrop>
	);
};
