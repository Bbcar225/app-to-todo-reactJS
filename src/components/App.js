import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import uniqueId from 'uniqueid';

import initialData from '../initialData';

import AddTask from './AddTask';
import NavBar from './NavBar';
import ToDoList from "./ToDoList";

class App extends Component {

	state = {
		tasks: initialData
	}

	onToggleCompleted = (taskId) => {
		let taskToUpdate = this.state.tasks.find(task => task.id === taskId)

		taskToUpdate.completed = !taskToUpdate.completed

		this.setState(prevState => (
			prevState.tasks.map(task => {
				return task.id === taskId ? taskToUpdate : task
			})
		))
	}

	onAddTask = (newTaskName) => {
		let newTask = {
			id: uniqueId(),
			name: newTaskName,
			completed: false
		}

		console.log(newTask.id)

		this.setState(prevState => ({
			tasks: [...prevState.tasks, newTask]
		}))
	}

	onDeleteCompleted = () => {
		this.setState(prevState => {
			let newState = prevState.tasks.filter(task => !task.completed)

			return {
				tasks: newState
			}
		})
	}

	render() {
		return (
			<section id="todo">
				<BrowserRouter>
					<Switch>
						<Route path='/add-task' render={(props) => <AddTask {...props} onAddTask={this.onAddTask}/>}/>
						<Route path='/:filter?' render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted}/>}/>
					</Switch>
					<NavBar onDeleteCompleted={this.onDeleteCompleted}/>
				</BrowserRouter>
    		</section>
		)
	}
}

export default App;
