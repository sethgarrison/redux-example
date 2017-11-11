import {GOT_TODOS} from './todo'
const SHOW_MESSAGE = 'SHOW_MESSAGE'

export const showMessage = (message) => ({
    type: SHOW_MESSAGE,
    payload: message
})

export const reducer = (state = '', action) => {
    switch (action.type) {
        case SHOW_MESSAGE:
            return action.payload
        case GOT_TODOS:
            return ''
        default:
            return ''
    }
}

export default reducer