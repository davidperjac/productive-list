import './App.scss';
import { AppUI } from './AppUI';
import { ThemeProvider } from './Context/context';

function App() {
	return (
		<ThemeProvider>
			<AppUI />
		</ThemeProvider>
	);
}

export default App;
