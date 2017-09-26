import React, {Component} from 'react'
import {connect} from 'react-redux'
import './todo-list.css'

class TodoList extends Component {
    render () {
        return (
            <div className="todo-list">
                <h1>My Todo List</h1>
                <ul>
                    {this.props.todos.map(todo =>
                        <li key={todo.id}>
                            <input type="checkbox" defaultChecked={todo.isComplete}/>
                            <button>X</button>
                            <span>{todo.name}</span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default connect(
    (state) => ({todos: state.todos})
)(TodoList)