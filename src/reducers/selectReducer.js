import { actions } from "../actions/actions"


//Setup our selectReducer
const selectReducer = (state, {type, payload}) => {
    switch(type) {
        case actions.CHANGE:
            return state = payload
        default:
            return state
    }
}

export default selectReducer