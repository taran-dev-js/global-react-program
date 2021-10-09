import axios from "axios";
import {baseURL, genresTypes, movieModel} from "../../constants";
import {
    getMoviesAction,
    triggerModalAction,
    postMovieAction,
    updateMoviesAction,
    deleteMoviesAction,
    sortMovieAction,
    filterMovieAction,
    searchMovieAction
} from "../actions";
import {getMovieModel} from "../../helpers/movieModel";

const getURL = (sortBy, filter) => {
    const filterQuery = filter === genresTypes[0] ? '' : `&filter=${filter}`;
    return `${baseURL}/movies?sortBy=${sortBy}${filterQuery}&sortOrder=desc`
}

export const getMovieThunk = () => async (dispatch, getState) => {
    const {sortBy, filter} = getState()
    try {
        const movies = await axios.get(getURL(sortBy, filter))
            .then(res => res.data.data);

        dispatch(getMoviesAction(movies))
    } catch (e) {
        console.error('getMovieThunk', e)
    }
}

export const postMovieThunk = values => async dispatch => {
    try {
        const movieModel = getMovieModel(values);
        const movie = await axios.post(`${baseURL}/movies`, movieModel).then(res => res.data);

        dispatch(postMovieAction(movie))
    } catch (e) {
        console.error('postMovieThunk', e)
    }
}

export const updateMovieThunk = values => async dispatch => {
    try {
        values[movieModel.genres] = [values.genres]//TODO
        const movie = await axios.put(`${baseURL}/movies`, values).then(res => res.data);

        dispatch(updateMoviesAction(movie))
    } catch (e) {
        console.error('updateMovieThunk', e)
    }
}

export const deleteMovieThunk = id => async dispatch => {
    try {
        await axios.delete(`${baseURL}/movies/${id}`).then(res => res.data);

        dispatch(deleteMoviesAction(id))
    } catch (e) {
        console.error('deleteMovieThunk', e)
    }
}

export const sortMovieThunk = (sortBy) => async (dispatch, getState) => {
    const {filter} = getState();
    try {
        const movies = await axios.get(getURL(sortBy, filter))
            .then(res => res.data.data);

        dispatch(sortMovieAction(sortBy, movies))
    } catch (e) {
        console.error('sortMovieThunk', e)
    }
}

export const filterMovieThunk = (filter) => async (dispatch, getState) => {
    const {sortBy} = getState();
    try {
        const movies = await axios.get(getURL(sortBy, filter))
            .then(res => res.data.data);

        dispatch(filterMovieAction(filter, movies))
    } catch (e) {
        console.error('filterMovieThunk', e)
    }
}

export const searchMovieThunk = search => async dispatch => {
    try {
        const movies = await axios.get(`${baseURL}/movies?search=${search}&searchBy=title`)
            .then(res => res.data.data);
        dispatch(searchMovieAction(movies))
    } catch (e) {
        console.error('filterMovieThunk', e)
    }
}

export const handleModal = isOpen => dispatch => {
    try {
        dispatch(triggerModalAction(isOpen))
    } catch (e) {
        console.error('handleModal', e)
    }
}

