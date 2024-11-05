import { BrowserRouter, Route, Routes } from "react-router-dom";
import PendingTaskts from "./components/PendingTasks";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PendingTaskts />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
