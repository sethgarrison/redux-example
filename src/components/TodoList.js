import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos} from '../store'
import './todo-list.css'

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos()
    }
    render () {
        return (
            <div className="todo-list">
                <h1>My Todo List</h1>
                <ul>
                    {this.props.todos.map(todo =>
                        <li key={todo.id}>
                            <input type="checkbox" defaultChecked={todo.isComplete}/>
                            <span>{todo.name}</span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default connect(
    (state) => ({todos: state.todos}),
    {fetchTodos}
)(TodoList)