////constatn variable
export const GET_MOVIES ='GET_MOVIES'
export const GET_MOVIE ='GET_MOVIE'
export const RESTE_MOVIE = 'RESTE_MOVIE'
//// export to reducer 

////  action creator    ////
export function getMovies() {
    return async function(dispatch) {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json()
      return dispatch({
          type: GET_MOVIES,
          data: movies.results,
      })
    }
}

export function getMovie(id) {
    return async function(dispatch) {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a9bcceabfa97ce7a518189e61f3ff83e&language=en-US`);
        const movie = await res.json();
      return dispatch({
          type: GET_MOVIE,
          data: movie,
      })
    }
}

export function resetMovie(){
    return{
        type: RESTE_MOVIE
    }
}