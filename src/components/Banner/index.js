import React from 'react'
import { AiFillPlayCircle, AiFillYoutube } from "react-icons/ai";
import { imageUrl } from '../../ulti/tmdbApi';
import Button from "../Button";
import Detail from '../Detail';

function Banner({movieData, onToggleModal}) {
    const backDrop = imageUrl.original + movieData?.backdrop_path;
    const poster = imageUrl.w300 + movieData?.poster_path
    return (
        <>
            {
                movieData &&
                <div className="relative h-[700px]">
                    <img
                        style={{
                            WebkitMaskImage: "linear-gradient(#000,transparent)",
                        }}
                        className="h-[500px] w-full absolute top-0 left-0 object-cover opacity-50 z-[-1] flex-shrink-0"
                        src={backDrop}
                        alt=""
                    />
                    <div className="flex justify-center max-w-7xl mx-auto pt-52 gap-5">
                        <img
                            className="w-[300px] rounded-lg"
                            src={poster}
                            alt=""
                        />
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <Button
                                    to={`/movie/${movieData.id}/watch`}
                                    leftIcon={<AiFillPlayCircle />}
                                >
                                    Watch Now
                                </Button>
                                <Button
                                    onClick={()=> onToggleModal()}
                                    leftIcon={<AiFillYoutube />}>
                                    Watch trailer
                                </Button>
                            </div>
                           <Detail movieData={movieData}/> 
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Banner
