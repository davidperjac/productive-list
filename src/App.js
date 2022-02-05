import './App.scss';
import { AppUI } from './AppUI';
import { TodoProvider, ThemeProvider } from './Context/TodoContext';

function App() {
	return (
		<TodoProvider>
			<ThemeProvider>
				<AppUI />
			</ThemeProvider>
		</TodoProvider>
	);
}

export default App;
