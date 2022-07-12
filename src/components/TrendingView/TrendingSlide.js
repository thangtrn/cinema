import React, { useRef } from "react";
import Slider from "react-slick";
import TrendingItem from "./TrendingItem";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import useGetMovieList from "../hooks/useGetMovieList";
import { moviesUrl } from '../../ulti/tmdbApi'

function TrendingSlide() {
    const moviesData = useGetMovieList(moviesUrl.popular);

    const sliderRef = useRef();
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        customPaging: (dots) => (
            <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
        ),
    };
    return (
        <div className="relative hidden md:block">
            <button
                onClick={() => sliderRef.current.slickPrev()}
                className="absolute top-[50%] left-[40px] z-10 transform translate-y-[-50%] p-4 rounded-full bg-slate-300 opacity-30 flex items-center justify-center transition duration-300 ease-out hover:opacity-100"
            >
                <GrFormPrevious size={26} />
            </button>
            <button
                onClick={() => sliderRef.current.slickNext()}
                className="absolute top-[50%] right-[40px] z-10 transform translate-y-[-50%] p-4 rounded-full bg-slate-300 opacity-30 flex items-center justify-center transition duration-300 ease-out hover:opacity-100"
            >
                <GrFormNext size={26} />
            </button>
            <Slider ref={sliderRef} {...settings}>
                {moviesData.slice(0, 8).map((movie, index) => (
                    <TrendingItem key={index} movieData={movie} />
                ))}
            </Slider>
        </div>
    );
}

export default TrendingSlide;
