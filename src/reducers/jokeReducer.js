import { actions } from "../actions/actions"


//Setup the joke reducer
const jokeReducer = (state, {type, payload}) => {
    switch(type) {
        case actions.GET_JOKE:
            return state = payload
            case actions.ERROR:
                return state = payload
        default:
            return state
    }
}

export default jokeReducer