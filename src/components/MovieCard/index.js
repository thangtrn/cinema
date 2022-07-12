import React from "react";
import { Link } from "react-router-dom";
import { imageUrl } from '../../ulti/tmdbApi'
import { defaultPoster } from '../../assets/img'

 
function MovieCard({movieData}) {

    const poster = imageUrl.w500 + movieData?.poster_path ||  movieData?.backdrop_path

    return (
        <>
            {
                movieData && <Link to={`/movie/${movieData?.id}`} className="block rounded-lg overflow-hidden group">
                <div className="group-hover:opacity-60 transition duration-300">
                    {
                        movieData.poster_path ? 
                        <img
                        className="w-full h-[300px] object-cover"
                        src={poster}
                        alt={movieData?.title} 
                    />: 
                        <img
                            className="w-full h-[300px] object-cover"
                            src={defaultPoster}
                            alt={movieData?.title}
                        />
                    }
                </div>
                <div className="bg-dark-darken p-2 h-[60px] w-full overflow-hidden group-hover:text-red transition duration-300 text-truncate-2">
                    {movieData?.title}
                </div>
            </Link>
            }
        </>
    );
}

export default MovieCard;
