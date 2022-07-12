import React, { useEffect, useState } from "react";
import CastCard from "./CastCard";
import axiosClient from '../../ulti/axiosClient'

function Casts({ movieId }) {
    const [credits, setCredits] = useState([])
    useEffect(()=> {
        async function getCredits() {
            try {
                const result = await axiosClient(movieId)
                setCredits(result.data.cast)
            } catch (error) {
                console.log(error);
            }
        }
        getCredits()

        return getCredits
    }, [movieId])

    return (
        <div className=" max-w-7xl mx-auto">
            <h1 className="text-3xl my-6">Cast</h1>
            <div className="grid grid-cols-7 gap-3">
                {
                    credits.slice(0,11).map((cast)=> (
                        <CastCard key={cast.cast_id} cast={cast}/>
                    ))
                }
                <CastCard />
            </div>
        </div>
    );
}

export default Casts;
