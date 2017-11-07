// import the createStore method from redux
import {createStore} from 'redux'

// constants for our action types - used in dispatch methods and reducers
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const initState = {
    count: 0
}

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
const reducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1}
        case DECREMENT:
            return {...state, count: state.count - 1}
        default:
            return state
    }
}

// our store
const store = createStore(
    reducer
)

export default store