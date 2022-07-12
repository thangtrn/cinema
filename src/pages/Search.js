import React from "react";
import { useState } from "react";
import axiosClient from "../ulti/axiosClient";
import { moviesUrl } from "../ulti/tmdbApi";
import MovieCard from "../components/MovieCard";
import Button from "../components/Button";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Search() {
    const [movieData, setMovieData] = useState([]);
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [loading, setLoading] = useState(false)

    const {search} = useLocation()
    const searchQuery = search.split('=')[1].replace('%20',' ')
    console.log(searchQuery)
    console.log(page)

    const handleLoadMore = () => {
        if(page >= totalPage) return
        setPage(page+1);
    }
    console.log(loading)
    
    useEffect(()=> {
        async function getMovie() {
            setLoading(true)
            try {
                const result = await axiosClient.get(moviesUrl.search, {
                    params: {
                        query: searchQuery,
                        page: page
                    }
                })
                console.log(result.data);
                setTotalPage(result.data.total_pages)
                setMovieData(prev => [...prev, ...result.data.results])
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        getMovie()
        return getMovie
    }, [searchQuery, page])

    return (
        <div className="mt-20 min-h-screen px-7">
            <div className="mx-auto max-w-7xl">
                <div className="mt-6">
                    {movieData.length === 0 ? (
                        <div className="text-center text-gray-400 text-6xl mt-9">
                            Search movie...
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-5 gap-6">
                                {movieData.map((item, index) => (
                                    <MovieCard key={index} movieData={item} />
                                ))}
                            </div>
                            <div className="flex justify-center mt-10">
                                { 
                                    loading ? 
                                    <Button className="!bg-blue-300" onClick={handleLoadMore}>
                                        Loading...
                                    </Button> :
                                    <Button className="!bg-blue-300" onClick={handleLoadMore}>
                                        Load More
                                    </Button>
                                }
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;
