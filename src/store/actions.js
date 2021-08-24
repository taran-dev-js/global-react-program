import {actionTypes} from "./actionTypes";

export const getMovie = (movie) => {
    return {
        action: actionTypes.GET_MOVIE_SUCCESS,
        payload: movie
    }
}