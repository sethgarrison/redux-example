import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateCurrent, saveTodo} from '../store/todo'

class TodoForm extends Component {
    handleInputChange = (evt) => {
        const val = evt.target.value
        this.props.updateCurrent(val)
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.saveTodo(this.props.currentTodo)
    }

    render() {
        const {currentTodo} = this.props
        return (
            <form onSubmit={this.handleSubmit} className="todo-form">
                <input type="text"
                       placeholder="Enter your todo..."
                       onChange={this.handleInputChange}
                       value={currentTodo}/>
            </form>
        )
    }
}

export default connect(
    (state) => ({currentTodo: state.todo.currentTodo}),
    {updateCurrent, saveTodo}
)(TodoForm)