import { TOGGLE_MESSAGE } from './actions'

const inistalState = {
    messageVisivility: false,
}


export default function (state = inistalState, action) {
    const { type } = action
    switch(type){
        case TOGGLE_MESSAGE:
            return {
                ...state,
                messageVisivility: !state.messageVisivility
            }
        default:
            return state
    }
}

