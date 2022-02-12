import './Checkbox.scss';
import { useState } from 'react';
import {
	animated,
	useSpring,
	config,
	useSpringRef,
	useChain,
} from 'react-spring';

function Checkbox({ onComplete, text }) {
	const storedTodos = localStorage.getItem('TODOS');
	let checked;

	if (storedTodos) {
		const todos = JSON.parse(storedTodos);
		if (todos) {
			checked = todos.filter((todo) => todo.text === text)[0].completed;
		}
	}

	const [isChecked, setIsChecked] = useState(checked);
	const checkboxAnimationRef = useSpringRef();
	const checkboxAnimationStyle = useSpring({
		backgroundColor: isChecked ? '#00ADB5' : '#fff',
		borderColor: isChecked ? '#00ADB5' : '#ddd',
		config: config.gentle,
		ref: checkboxAnimationRef,
	});

	const [checkmarkLength, setCheckmarkLength] = useState(null);

	const checkmarkAnimationRef = useSpringRef();
	const checkmarkAnimationStyle = useSpring({
		x: isChecked ? 0 : checkmarkLength,
		config: config.gentle,
		ref: checkmarkAnimationRef,
	});

	useChain(
		isChecked
			? [checkboxAnimationRef, checkmarkAnimationRef]
			: [checkmarkAnimationRef, checkboxAnimationRef],
		[0, 0.1]
	);

	const handleChange = () => {
		setIsChecked(!isChecked);
		onComplete();
	};

	return (
		<label>
			<input type="checkbox" onChange={handleChange} />
			<animated.svg
				style={checkboxAnimationStyle}
				className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
				aria-hidden="true"
				viewBox="0 0 15 11"
				fill="none"
			>
				<animated.path
					d="M1 4.5L5 9L14 1"
					strokeWidth="2"
					stroke="#fff"
					ref={(ref) => {
						if (ref) {
							setCheckmarkLength(ref.getTotalLength());
						}
					}}
					strokeDasharray={checkmarkLength}
					strokeDashoffset={checkmarkAnimationStyle.x}
				/>
			</animated.svg>
		</label>
	);
}

export default Checkbox;
