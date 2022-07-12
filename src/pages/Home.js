import React from 'react'
import MovieList from '../components/MovieList'
import TrendingSlide from '../components/TrendingView/TrendingSlide'
import { moviesUrl } from '../ulti/tmdbApi'

const movieProps = [
  {
    title: 'Trending Movies',
    url: moviesUrl.trending
  },
  {
    title: 'Popular Movies',
    url: moviesUrl.popular
  },
  {
    title: 'Top Rated Movies',
    url: moviesUrl.topRated
  },
]

function Home() {
  return (
    <>
      <TrendingSlide/>
      <div className='px-7'>
      {
        movieProps.map(item => (
          <MovieList key={item.title} title={item.title} movieUrl={item.url}/>
        ))
      }
      </div>
    </>
  )
}

export default Home
