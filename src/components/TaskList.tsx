import Task from "./Task";

type TaskList = {
	taskList: string[];
	taskDelete: (index: number) => void;
};

const TaskList = ({ taskList, taskDelete }: TaskList) => {
	return (
		<>
			<div className="">
				{taskList.map((task, index) => (
					<Task key={index} task={task} taskDelete={() => taskDelete(index)}></Task>
				))}
			</div>
		</>
	);
};

export default TaskList;
