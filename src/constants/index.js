export const baseURL = 'http://localhost:4000';

export const movieModel = {
    id: "id",
    title: "title",
    tagline: "tagline",
    voteAverage: "vote_average",
    voteCount: "vote_count",
    releaseDate: "release_date",
    posterPath: "poster_path",
    overview: "overview",
    budget: "budget",
    revenue: "revenue",
    runtime: "runtime",
    genres: "genres"
}

export const modalTypes = {
    editModal: 'editModal',
    addModal: 'addModal',
    deleteModal: 'deleteModal'
}

export const genresTypes = [
    'all',
    'documentary',
    'comedy',
    'horror',
    'action'
];

export const sortingTypes = {
    'release date': 'release_date',
    'rating': 'vote_average',
}