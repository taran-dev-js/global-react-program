import {actionTypes} from "./actionTypes";

export const getMoviesAction = (movies) => ({
    type: actionTypes.GET_MOVIE_SUCCESS,
    payload: movies
})

export const updateMoviesAction = (movie) => ({
    type: actionTypes.UPDATE_MOVIE_SUCCESS,
    payload: movie
})

export const deleteMoviesAction = (movie) => ({
    type: actionTypes.DELETE_MOVIE_SUCCESS,
    payload: movie
})

export const postMovieAction = (movie) => ({
    type: actionTypes.POST_MOVIE_SUCCESS,
    payload: movie
})

export const triggerModalAction = (openModal) => ({
    type: actionTypes.TRIGGER_MODAL,
    payload: openModal
})