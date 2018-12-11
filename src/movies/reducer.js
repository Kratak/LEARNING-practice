import { GET_MOVIES, GET_MOVIE, RESTE_MOVIE } from './actions'

const inistalState = {
    movies: [],
    moviesLoaded: false,
    moviesLoadedAt: null,
    movie: {},
    movieLoaded: false,
}

export default function (state = inistalState, action) {
    const { type, data } = action
    switch(type){
        case GET_MOVIES:
        return {
            ...state,
            movies: data,
            moviesLoaded: true,
            moviesLoadedAt: new Date(),
        }
        case GET_MOVIE:
        return {
            ...state,
            movie: data,
            movieLoaded: true,
        }
        case RESTE_MOVIE:
        return {
            ...state,
            movie: {},
            movieLoaded: false,
        }
        default:
            return state
    }
}

