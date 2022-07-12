
export const moviesUrl = {
    popular: '/movie/popular',
    topRated: '/movie/top_rated',
    detailMovie: 'movie/',
    trending: '/trending/movie/day',
    similar(movieId) {
        return `/movie/${movieId}/similar`
    },
    search: '/search/movie',
    credits(movieId) {
        return `/movie/${movieId}/credits`
    },
    videos(movieId) {
        return `/movie/${movieId}/videos`
    }
}

export const imageUrl = {
    original: 'https://image.tmdb.org/t/p/original',
    w500: 'https://image.tmdb.org/t/p/w500',
    w300: 'https://image.tmdb.org/t/p/w300',
    w200: 'https://image.tmdb.org/t/p/w200',

}