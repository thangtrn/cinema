import React from "react";
import Button from "../Button";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { imageUrl } from '../../ulti/tmdbApi'

function TrendingItem({movieData}) {
    const backdrop = imageUrl.original + movieData?.backdrop_path    
    const poster = imageUrl.original + movieData?.poster_path 
    return (
        <div className="h-[740px] w-full relative flex items-center justify-center">
            <img
                src={backdrop}
                className="h-full w-full absolute inset-0 opacity-50 object-cover"
                alt=""
            />
            <div className="flex items-center justify-center max-w-7xl px-8">
                <div className="z-50 flex-none  basis-3/5 flex flex-col gap-4 ml-6">
                    <h2 className="text-5xl text-gray-10">
                        {movieData?.title || movieData?.original_title} 
                    </h2>
                    <p className="md:text-xl w-full text-gray-100 text-truncate">
                        {movieData?.overview}
                    </p>

                    <div className="z-50 flex gap-3">
                        <Button to={`/movie/${movieData?.id}/watch`} leftIcon={<AiFillPlayCircle />}>
                            Watch Now
                        </Button>
                        <Button to={`/movie/${movieData?.id}`} leftIcon={<BsInfoCircleFill />}>
                            View Info
                        </Button>
                    </div>
                </div>
                <div className="z-50 flex-none md:flex-1 basis-2/5 flex justify-center">
                    <img className="rounded-xl w-[300px]" src={poster} alt="" />
                </div>
            </div>
        </div>
    );
}

export default TrendingItem;
