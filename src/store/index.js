// import the createStore method from redux
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {getTodos} from '../api/todoService'

// our initial state
const initState = {
    todos: []
}

// Action types
const GOT_TODOS = 'GOT_TODOS'

// Action creators
const gotTodos = (todos) => ({
    type: GOT_TODOS,
    payload: todos
})

// asynchronous action creators using redux-thunk
export const fetchTodos = () => {
    return (dispatch) => {
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

// our store
const store = createStore(
    reducer,
    // we apply our thunk middleware here so we can return methods in our action creators
    applyMiddleware(thunk)
)

export default store