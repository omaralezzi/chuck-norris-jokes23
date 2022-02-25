import {actions } from '../actions/actions'


//Setup the categories reducer
const categoriesReducer = (state, {type, payload}) => {
    switch(type) {
        case actions.GET_CATEGORIES:
            return state = payload
            case actions.ERROR:
                return state = payload
        default:
            return state
    }
}

export default categoriesReducer