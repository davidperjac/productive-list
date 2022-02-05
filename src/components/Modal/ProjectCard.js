import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './projectcard.scss';

import { Modal } from './Modal';
import { useContext } from 'react';
import { ThemeContext, ModalContext } from '../../context';

export const ProjectCard = (props) => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const modal = useContext(ModalContext);

	const [modalOpen, setModalOpen] = useState(false);

	const close = () => {
		setModalOpen(false);
		modal.dispatch({ type: 'OPEN' });
	};

	const open = () => {
		setModalOpen(true);
		modal.dispatch({ type: 'OPEN' });
	};

	return (
		<div>
			<motion.div
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className="card"
				onClick={() => (modalOpen ? close() : open())}
				style={{
					border: darkMode
						? '2px solid rgb(54, 69, 79)'
						: '2px solid rgb(243, 242, 242)',
				}}
			>
				<div
					className="browser"
					style={{
						transition: '1s',
						backgroundColor: darkMode
							? 'rgb(54, 69, 79)'
							: 'rgb(243, 242, 242)',
						border: darkMode
							? '2px solid rgb(54, 69, 79)'
							: '2px solid rgb(243, 242, 242)',
					}}
				>
					<div className="circle left"></div>
					<div className="circle middle"></div>
					<div className="circle right"></div>
				</div>
				<img
					src={props.foto}
					className="img"
					alt={props.id}
					draggable="false"
				></img>
			</motion.div>
			<AnimatePresence
				initial={false}
				exitBeforeEnter={true}
				onExitComplete={() => null}
			>
				{modalOpen && (
					<Modal
						modalOpen={modalOpen}
						handleClose={close}
						foto={props.foto}
						name={props.name}
						desc={props.desc}
						linkRepo={props.linkRepo}
						linkDemo={props.linkDemo}
						tech={props.tech}
					/>
				)}
			</AnimatePresence>
		</div>
	);
};
