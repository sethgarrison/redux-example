// import the createStore method from redux
import {createStore} from 'redux'

// constants for our action types - used in dispatch methods and reducers
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// dispatch actions - bound to our component
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

// our reducer which interacts with the state
const reducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}

// our store
const store = createStore(
    reducer
)

export default store