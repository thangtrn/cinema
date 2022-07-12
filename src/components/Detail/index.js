import React from 'react'

function Detail({ movieData }) {
  return (
    <div className='flex flex-col gap-3'>
        <h1 className="text-4xl">{movieData.title || movieData.original_title}</h1>
        <p className="text-lg text-justify">
            {movieData.overview}
        </p>
        <p>Release Date: {movieData.release_date}</p>
        { movieData.genres &&
            <div className="flex gap-2 flex-wrap">
                {movieData.genres.map( item => (
                    <span key={item.id} className="bg-dark-lighten border border-white px-3 py-1 cursor-pointer rounded-full whitespace-nowrap transition duration-300 hover:bg-rose-500 hover:border-rose-500">
                        {item.name}
                    </span>   
                ) )}
            </div> 
        }
        <div className="flex items-center">
            <div>
                {
                    Array(10).fill('').map((item,index)=>(
                        <span 
                            key={index}
                            className={`text-xl ${ index <= Math.floor(movieData.vote_average) ? 'text-orange' : ''}`}
                        >★</span>
                    ))
                }
                <span> ({movieData.vote_count})</span>
            </div>
        </div>
                        
    </div>
  )
}

export default Detail
