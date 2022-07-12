import { useEffect, useState } from "react";
import axiosClient from "../../ulti/axiosClient";

function useGetMovieList(moviesUrl) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovieData() {
            try {
                const result = await axiosClient.get(moviesUrl);
                setMovies(result?.data?.results);
            } catch (error) {
                console.log(error);
            }
        }
        getMovieData();

        return getMovieData;
    }, [moviesUrl]);

    return movies;
}

export default useGetMovieList;
