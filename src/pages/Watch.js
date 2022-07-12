import React from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import useGetMovie from "../components/hooks/useGetMovie";
import Sidebar from "../components/Sidebar";
function Watch() {
    const params = useParams();
    const movieData = useGetMovie(params.id);

    return (
        <div className="w-full px-7">
            <div className="max-w-7xl mx-auto mt-28 flex flex-col lg:flex-row gap-3">
                <div className="flex-grow">
                    <div className="relative h-0 w-full bg-dark-darken pb-[56.25%]">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={`https://2embed.org/embed/${params.id}`}
                            title={movieData.title}
                            frameborder="0"
                        ></iframe>
                    </div>
                    <div className="mt-5">
                        <Detail movieData={movieData}/>
                    </div>
                </div>
                <Sidebar movieId={params.id}/>
            </div>
        </div>
    );
}

export default Watch;
