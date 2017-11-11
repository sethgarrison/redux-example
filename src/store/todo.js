import {getTodos} from '../api/todoService'
import {showMessage} from './message'

// our initial state
const initState = {
    todos: []
}

// Action types
export const GOT_TODOS = 'GOT_TODOS'

// Action creators
const gotTodos = (todos) => ({
    type: GOT_TODOS,
    payload: todos
})

// asynchronous action creators using redux-thunk
export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(showMessage('loading todos'))
        getTodos()
            .then(todos => dispatch(gotTodos(todos)))
    }
}

// our reducer which interacts with the state
const reducer = (state = initState, action) => {
    switch (action.type) {
        case GOT_TODOS:
            return {...state, todos: action.payload}
        default:
            return state
    }
}

export default reducer