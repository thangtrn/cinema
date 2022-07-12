import React from 'react'
import { imageUrl } from '../../ulti/tmdbApi'
import { defaultPoster } from '../../assets/img'
function CastCard({ cast }) {
    const profileImage = imageUrl.w200 + cast?.profile_path

    return (
        <>
            {
                cast && 
                <div>
                    {
                        cast.profile_path ? 
                        <img
                            className="w-full object-cover rounded-lg"
                            src={profileImage}
                            alt={cast.name}
                        /> : 
                        <img
                            className="w-full object-cover rounded-lg"
                            src={defaultPoster}
                            alt=""
                        /> 
                    }
                    <div className="w-full overflow-hidden text-center">
                        {cast.name}
                    </div>
                    <p className='text-orange text-center'>{cast.character}</p>
                </div>
            }
        </>
  )
}

export default CastCard
