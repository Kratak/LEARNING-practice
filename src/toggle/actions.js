////constatn variable
export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE'
//// export to reducer 
////  action creator    ////
export function toggleMessage() {
    return {
        type: TOGGLE_MESSAGE,
    }
}
