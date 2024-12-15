import { BrowserRouter, Route, Routes } from "react-router-dom";
import PendingTaskts from "./components/PendingTasks";

function App() {
	return (
		<BrowserRouter basename="/pending_tasks_react_ts">
			<Routes>
				<Route path="/" element={<PendingTaskts />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
