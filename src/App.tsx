import { useState } from "react";
import TaskList from "./components/TaskList";
const App = () => {
	const [newTask, setNewTask] = useState<string>("");
	const [taskList, setTaskList] = useState<string[]>([]);

	const handleAddTsk = () => {
		if (newTask.trim() === "") return;
		setTaskList((tasksAnteriores) => [...tasksAnteriores, newTask]);
		setNewTask("");
	};
	const handleDeleteTask = (index: number) => {
		setTaskList((tareas) => tareas.filter((_, i) => i !== index));
	};
	return (
		<>
			<h1>Lista de Tareas</h1>
			<div>
				<input
					type="text"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
					placeholder="Ingrese una nueva tarea"
				/>
				<button onClick={handleAddTsk}>Agregar</button>
			</div>
			<TaskList taskList={taskList} taskDelete={handleDeleteTask}></TaskList>
		</>
	);
};
export default App;
