import {movieModel} from "../constants";

export const getMovieModel = (values) => {
    // console.log(values[movieModel.genres]);
    return {
        [movieModel.title]: values[movieModel.title],
        [movieModel.tagline]: "Here's to the fools who dream.",
        [movieModel.voteAverage]: 7.9,
        [movieModel.voteCount]: 6782,
        [movieModel.releaseDate]: values[movieModel.releaseDate],
        [movieModel.posterPath]: values[movieModel.posterPath],
        [movieModel.overview]: values[movieModel.overview],
        [movieModel.budget]: 30000000,
        [movieModel.revenue]: 445435700,
        [movieModel.runtime]: values[movieModel.runtime],
        [movieModel.genres]: [values[movieModel.genres]]
    }
}