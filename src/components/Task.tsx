type Task = {
    task: string
    taskDelete: () => void
}

const Task = ({task,taskDelete}: Task) => {
  return (
    <div>
        <span>{task}</span>
        <button onClick={taskDelete}>Borrar</button>
    </div>
  )
}
export default Task