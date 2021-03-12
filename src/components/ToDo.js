import React, { Component } from 'react';

class Todo extends Component {

    state = {
        completed: this.props.task.completed
    }

    toggleCompleted = () => {
        this.setState((prevState) => ({
            completed: !prevState.completed
        }))

        this.props.onToggleCompleted(this.props.task.id)
    }

	render() {
		return (
            <li className={"list-group-item " + (this.state.completed ? 'bg-success' : '')}>
                <div className='float-start'>{this.props.task.name}</div>
                <div className='float-end'>
                    <button className={"btn btn-sm ml-auto " + (this.state.completed ? 'btn-light' : 'btn-success')} onClick={this.toggleCompleted}>
                        &#x2713;
                    </button>
                </div>
            </li>
		)
	}
}

export default Todo;
