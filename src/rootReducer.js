import { combineReducers } from 'redux'

import toggle from './toggle/reducer'
import movies from './movies/reducer'

const rootReducer = combineReducers({
    // message: message  same synstax
    toggle,
    movies
})

export default rootReducer