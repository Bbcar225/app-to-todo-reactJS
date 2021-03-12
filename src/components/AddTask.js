import React, { Component } from 'react';

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.newTask = React.createRef();
      }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.onAddTask(this.newTask.current.value)

        this.props.history.push('/')
    }

	render() {
		return (
            <section>
                <h1 className="m-3">Nouvelle tâche</h1>
                <div className="card mx-3">
                    <form className="card-body" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label form="taskName">Nom de la tâche</label>
                            <input ref={this.newTask} type="text" className="form-control" name="taskName" id="taskName" required/>
                        </div>

                        <div className="d-grid gap-2 my-2">
                            <button type="submit" className="btn btn-primary btn-block">Créer</button>
                        </div>
                    </form>
                </div>
            </section>
		)
	}
}

export default AddTask