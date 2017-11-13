import React from 'react'
import {connect} from 'react-redux'
import {fetchTodos, toggleTodo, deleteTodo, getVisibleTodos} from '../store/todo'
import './todo-list.css'

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
    <li>
        <span className="delete-item">
            <button onClick={() => deleteTodo(id)}>X</button>
        </span>
        <input
            type="checkbox"
            onChange={()=> toggleTodo(id)}
            defaultChecked={isComplete} />
        <p>{name}</p>
    </li>
)

class TodoList extends React.Component {
    componentDidMount() {
        this.props.fetchTodos()
    }

    render() {
        return this.props.todos.length ? (
            <div className="todo-list">
                <ul>
                    {this.props.todos.map(todo =>
                        <TodoItem
                            deleteTodo={this.props.deleteTodo}
                            toggleTodo={this.props.toggleTodo}
                            key={todo.id} {...todo}
                        />
                    )}
                </ul>
            </div>
        ) : (
            <div>
                <h1>No todos match this filter</h1>
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter)}),
    {fetchTodos, toggleTodo, deleteTodo}
)(TodoList)