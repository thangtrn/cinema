import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Casts from "../components/Casts";
import useGetMovie from "../components/hooks/useGetMovie";
import Modal from "../components/Modal";
import MovieList from '../components/MovieList'
import { moviesUrl } from '../ulti/tmdbApi'

function Movie() {
    const [isOpen, setIsOpen] = useState(false)
    const params = useParams();
    const movieData = useGetMovie(params.id)
    
    const handleToggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            { isOpen && <Modal onToggleModal={handleToggleModal} movieUrl={moviesUrl.videos(movieData.id)}/> }
            <Banner movieData={movieData} onToggleModal={handleToggleModal}/>
            <div className="px-7">
            <Casts movieId={moviesUrl.credits(params.id)}/>
            <MovieList title="Similar Movies" movieUrl={moviesUrl.similar(params.id)}/>
            </div>
        </>
    );
}

export default Movie;
