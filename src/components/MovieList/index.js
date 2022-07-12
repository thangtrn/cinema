import React, { useRef } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";
import MovieCard from "../MovieCard";
import useGetMovieList from "../hooks/useGetMovieList";

function MovieList({ title, movieUrl }) {
    const sliderRef = useRef();
    const moviesData = useGetMovieList(movieUrl);
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        speed: 500,
        lazyLoad: "ondemand",
    };
    return (
        <>
            {
                moviesData && 
                <section className="max-w-7xl mx-auto">
                    <h1 className="text-2xl mb-3 mt-8">{title}</h1>
                    <div className="relative">
                        <button
                            onClick={() => sliderRef.current.slickPrev()}
                            className="absolute top-[50%] left-0 z-10 transform translate-y-[-50%] translate-x-[-50%] p-3 rounded-full bg-slate-300 opacity-30 flex items-center justify-center transition duration-300 ease-out hover:opacity-100"
                        >
                            <GrFormPrevious size={22} />
                        </button>
                        <button
                            onClick={() => sliderRef.current.slickNext()}
                            className="absolute top-[50%] right-0 z-10 transform translate-y-[-50%] translate-x-[50%] p-3 rounded-full bg-slate-300 opacity-30 flex items-center justify-center transition duration-300 ease-out hover:opacity-100"
                        >
                            <GrFormNext size={22} />
                        </button>
                        <Slider
                            ref={sliderRef}
                            className="custom-slick overflow-hidden"
                            {...settings}
                        >
                            {moviesData.map((item, index) => (
                                <MovieCard key={index} movieData={item} />
                            ))}
                        </Slider>
                    </div>
                </section>
            }
        </>
    );
}

export default MovieList;
