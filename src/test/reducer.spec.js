import {initialState, rootReducer} from "../store/rootReducer";
import {genresTypes, modalTypes, movieMock, sortingTypes} from '../constants'
import {
    deleteMoviesAction, filterMovieAction,
    getMoviesAction,
    postMovieAction,
    sortMovieAction,
    triggerModalAction,
    updateMoviesAction
} from "../store/actions";

describe('Root reducer', () => {
    it('should returns initial state', () => {
        expect(rootReducer(undefined, {})).toEqual(initialState)
    });

    it('handle get movies', () => {
        expect(rootReducer(initialState, getMoviesAction(movieMock))).toEqual({
            ...initialState,
            movies: movieMock
        })
    });

    it('handle post movie', () => {
        expect(rootReducer(initialState, postMovieAction(movieMock[0]))).toEqual({
            ...initialState,
            movies: [...initialState.movies, movieMock[0]]
        })
    });

    it('handle update movie', () => {
        expect(rootReducer(initialState, updateMoviesAction(movieMock[0]))).toEqual({
            ...initialState,
            movies: initialState.movies.map(item => item.id === movieMock[0].id ? movieMock[0] : item)
        })
    });

    it('handle delete movie', () => {
        expect(rootReducer(initialState, deleteMoviesAction(movieMock[0].id))).toEqual({
            ...initialState,
            movies: initialState.movies.filter(item => item.id !== movieMock[0].id)
        })
    });

    it('handle sort movie', () => {
        expect(rootReducer(initialState, sortMovieAction(sortingTypes.rating, movieMock))).toEqual({
            ...initialState,
            movies: movieMock,
            sortBy: sortingTypes.rating
        })
    });

    it('handle filter movie', () => {
        expect(rootReducer(initialState, filterMovieAction(genresTypes[0], movieMock))).toEqual({
            ...initialState,
            movies: movieMock,
            filter: genresTypes[0]
        })
    });

    it('handle modal',() => {
        expect(rootReducer(initialState, triggerModalAction(modalTypes.addModal))).toEqual({
            ...initialState,
            openModal: modalTypes.addModal
        })
    });
})

