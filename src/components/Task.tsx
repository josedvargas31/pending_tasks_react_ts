type Task = {
	task: string;
	taskDelete: () => void;
};

const Task = ({ task, taskDelete }: Task) => {
	return (
		<div className="flex justify-center p-auto">
			<div className="container flex justify-center rounded-xl shadow-2xl p-4 w-8/12">
				<div className="w-10/12 flex items-center justify-around overflow-hidden rounded-lg shadow-lg border bg-white p-2">
					<span className="text-sm font-medium text-gray-900">{task}</span>
					<button
						className="transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-amber-600 duration-300 text-white rounded-lg px-2 py-2 m-2"
						onClick={taskDelete}
					>
						Borrar
					</button>
				</div>
			</div>
		</div>
	);
};
export default Task;
