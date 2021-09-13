import axios from "axios";
import {baseURL, movieModel} from "../../constants";
import {getMoviesAction, triggerModalAction, postMovieAction, updateMoviesAction, deleteMoviesAction} from "../actions";
import {getMovieModel} from "../../helpers/movieModel";

export const getMovieThunk = () => async dispatch => {
    try {
        const movies = await axios.get(`${baseURL}/movies`).then(res => res.data.data);
        await console.log('getMovieThunk', movies);

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

export const handleModal = isOpen => dispatch => {
    try {
        dispatch(triggerModalAction(isOpen))
    } catch (e) {
        console.error('handleModal', e)
    }
}

