import { React } from "react";
import Todo from "./ToDo";

const ToDoList = ({tasks, match, onToggleCompleted}) => {
	let filterdTasks = null

	switch (match.params.filter) {
		case 'completed':
			filterdTasks = tasks.filter(task => task.completed)
			break;
	
		default:
			filterdTasks = tasks
			break;
	}

	if (filterdTasks.length === 0)
	{
		return (
			<>
				<h1 className="m-3">Liste de tâches</h1>
				<ul className="list-group m-3">
					<li className="list-group-item">Aucune tache terminée !</li>
				</ul>
			</>
		)	
	}
	else
	{
		return (
			<>
				<h1 className="m-3">Liste de tâches</h1>
				<ul className="list-group m-3">
					{
						filterdTasks.map((task) => <Todo key={task.id} task={task} onToggleCompleted={onToggleCompleted}/>)
					}
				</ul>
			</>
		)
	}
}

export default ToDoList