import {actionTypes} from "./actionTypes";
import {genresTypes, sortingTypes} from "../constants";

const initialState = {
    movies: [],
    openModal: {
        name: '',
        movie: null
    },
    sortBy: sortingTypes['release date'],
    filter: genresTypes[0]
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_MOVIE_SUCCESS:
            return {
                ...state,
                movies: action.payload
            }
        case actionTypes.POST_MOVIE_SUCCESS:
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        case actionTypes.UPDATE_MOVIE_SUCCESS:
            return {
                ...state,
                movies: state.movies.map(item => item.id === action.payload.id ? action.payload : item)
            }
        case actionTypes.DELETE_MOVIE_SUCCESS:
            return {
                ...state,
                movies: state.movies.filter(item => item.id !== action.payload)
            }
        case actionTypes.SORT_MOVIE_SUCCESS:
            return {
                ...state,
                movies: action.payload.movies,
                sortBy: action.payload.sortBy
            }
        case actionTypes.FILTER_MOVIE_SUCCESS:
            return {
                ...state,
                movies: action.payload.movies,
                filter: action.payload.filter
            }
        case actionTypes.SEARCH_MOVIE_SUCCESS:
            return {
                ...state,
                movies: action.payload
            }
        case actionTypes.TRIGGER_MODAL:
            return {
                ...state,
                openModal: action.payload
            }
        default:
            return initialState;
    }

}