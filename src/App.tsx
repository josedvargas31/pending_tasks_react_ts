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
			<header className="p-2 border-b bg-white shadow flex justify-between items-center">
				<img
					className="rounded-xl w-12"
					src="/logoD.svg"
					alt="Imagen de registro"
				/>
				<div className="flex justify-center items-center">
					<h2 className="text-center text-3xl font-black p-2">TypeScript</h2>
					<img
						width="45"
						height="45"
						src="https://img.icons8.com/color/48/typescript.png"
						alt="typescript"
					/>
				</div>

				<h1 className="text-xl font-black">To-do list</h1>
			</header>

			<div className="flex flex-col justify-center mt-10">
				<h2 className="text-2xl font-bold text-center pb-4">
					Agrega una nueva tarea! 🤘🏻
				</h2>
			</div>
			<div className="md:flex-row md:justify-center ">
				<div className="flex justify-center py-5">
					<input
						className="rounded-lg border-2 p-4 border-gray-500 w-4/12"
						type="text"
						value={newTask}
						onChange={(e) => setNewTask(e.target.value)}
						placeholder="Ingrese una nueva tarea"
					/>
				</div>
				<div className="flex justify-center">
					<button
						className="transition duration-700 ease-in-out inline-block bg-black hover:-translate-y-1  hover:scale-110 rounded-lg  p-4"
						onClick={handleAddTsk}
					>
						<span className="text-white text-center text-2xl font-bold hover">
							Agregar
						</span>
					</button>
				</div>
				<TaskList taskList={taskList} taskDelete={handleDeleteTask}></TaskList>
			</div>
		</>
	);
};
export default App;
