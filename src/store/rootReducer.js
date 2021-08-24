import {actionTypes} from "./actionTypes";

const rootState = {
    movies: []
}

export default function rootReducer(state = rootState, action) {
    switch (action.type) {
        case actionTypes.GET_MOVIE_SUCCESS:
            return {
                ...state,
                movies: action.payload
            }
    }

}