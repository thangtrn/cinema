import { useEffect, useState } from 'react'
import axiosClient from '../../ulti/axiosClient'
import { moviesUrl } from '../../ulti/tmdbApi'

function useGetMovie(movieID) {
    const [movie, setMovie] = useState([])
    useEffect(()=> {
        const handleGetMovie = async () => {
            try {
                const result = await axiosClient.get(moviesUrl.detailMovie + movieID);
                setMovie(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        handleGetMovie()

        return handleGetMovie
    }, [movieID])
    
    return movie
}

export default useGetMovie
