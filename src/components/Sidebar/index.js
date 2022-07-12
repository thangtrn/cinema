import React from 'react'
import SidebarItem from '../SidebarItem'
import useGetMovieList from '../hooks/useGetMovieList'
import { moviesUrl } from '../../ulti/tmdbApi'
function Sidebar({movieId}) {
    const similarMovie = useGetMovieList(moviesUrl.similar(movieId))
    return (
        <>
            {
                similarMovie &&
                <div className="w-80 flex-shrink-0  max-h-screen overflow-y-auto flex flex-col gap-2">
                    {
                        similarMovie.map((item)=> (
                            <SidebarItem title={item.title} to={`/movie/${item.id}`} posterPath={item.poster_path}/>
                        ))
                    }
                </div>
            }
        </>
    )
}

export default Sidebar
