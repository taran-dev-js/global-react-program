import {actionTypes} from "./actionTypes";

const initialState = {
    movies: [],
    openModal: {
        name: '',
        movie: null
    },
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
            console.log('DELETE_MOVIE_SUCCESS', state.movies.filter(item => item.id !== action.payload));
            return {
                ...state,
                movies: state.movies.filter(item => item.id !== action.payload)
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