export const ROUTE_PARAMS = {
	MOVIE_ID: ':movieId',
};

export const PATHS = {
	MOVIES: {
		IDENTITY: 'movies',
		LIST: '',
		DETAIL: `${ROUTE_PARAMS.MOVIE_ID}`,
	},
};
