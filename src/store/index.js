// import the createStore method from redux
import {createStore} from 'redux'

const initState = {
    todos: [
        {id: 1, name: 'Add asynchronous method', isComplete: false}
    ]
}

// our reducer which interacts with the state
const reducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// our store
const store = createStore(
    reducer
)

export default store