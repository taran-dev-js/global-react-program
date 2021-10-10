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

export const movieMock = [
    {
        "id": 181808,
        "title": "Star Wars: The Last Jedi",
        "tagline": "The Saga Continues",
        "vote_average": 7.1,
        "vote_count": 4732,
        "release_date": "2017-12-13",
        "poster_path": "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
        "budget": 200000000,
        "revenue": 1325937250,
        "genres": ["Fantasy", "Adventure", "Science Fiction"],
        "runtime": 152
    },  {
        "id": 11,
        "title": "Star Wars",
        "tagline": "A long time ago in a galaxy far, far away...",
        "vote_average": 8.1,
        "vote_count": 8516,
        "release_date": "1977-05-25",
        "poster_path": "https://image.tmdb.org/t/p/w500/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg",
        "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        "budget": 11000000,
        "revenue": 775398007,
        "genres": ["Adventure", "Action", "Science Fiction"],
        "runtime": 121
    }, {
        "id": 330459,
        "title": "Rogue One: A Star Wars Story",
        "tagline": "A Rebellion Built on Hope",
        "vote_average": 7.4,
        "vote_count": 6894,
        "release_date": "2016-12-14",
        "poster_path": "https://image.tmdb.org/t/p/w500/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg",
        "overview": "A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.",
        "budget": 200000000,
        "revenue": 1056057273,
        "genres": ["Action", "Adventure", "Science Fiction"],
        "runtime": 133
    }
]
