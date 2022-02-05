import './App.scss';
import { AppUI } from './AppUI';
import { TodoProvider } from './Context/TodoContext';

// const defaultTodos = [
// 	{ text: 'Ver curso de Platzi', completed: false },
// 	{ text: 'Decir a Valeria que la amas', completed: false },
// 	{ text: 'Organizar cuarto', completed: false },
// ];

function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
