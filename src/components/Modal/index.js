import React, { useEffect, useState } from 'react'
import axiosClient from '../../ulti/axiosClient'

function Modal({onToggleModal, movieUrl}) {
    const [videos, setVideos] = useState([])

    useEffect(()=> {
        async function getVideo() {
            try {
                const result = await axiosClient(movieUrl)
                setVideos(result.data.results)
            } catch (error) {
                console.log(error);
            }
        }
        getVideo()

        return getVideo
    }, [movieUrl])

    return (
        <>
            {
                videos &&
                <div onClick={()=> onToggleModal()} className='fixed inset-x-0 top-0 bottom-0 w-full bg-[rgba(0,0,0,0.5)] z-50 flex justify-center items-center'>
                    <div onClick={e => e.stopPropagation()} className='w-[820px] h-2/3 bg-dark-lighten p-3 pr-1 overflow-y-auto'>
                        <div>
                        {
                            videos.map((item, index)=> (
                                <iframe title={item.name} className='w-full h-[420px] mb-3 last:mb-0' src={`https://www.youtube.com/embed/${item.key}`}></iframe>
                            ))
                        }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal
