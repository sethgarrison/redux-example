// import the createStore method from redux
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import todo from './todo'
import message from './message'

// our store
const store = createStore(
    combineReducers({
        todo,
        message
    }),
    // we apply our thunk middleware here so we can return methods in our action creators
    applyMiddleware(thunk)
)

export default store