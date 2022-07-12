import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cinemaLogo } from "../../assets/img";
import { ImSearch } from 'react-icons/im'

function Header({onOpen}) {
    const headerRef = useRef()

    useEffect(()=> {
        function changeColor() {
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('bg-slate-800')
            } else {
                headerRef.current.classList.remove('bg-slate-800')
            }
        }

        window.addEventListener('scroll', changeColor)
        
        return ()=> {
            window.removeEventListener('scroll', changeColor)
        }
    }, [])

    return (
        <div ref={headerRef} className="fixed inset-x-0 top-0 px-7 py-3 transition-all ease-in-out duration-300 z-[9999]">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <Link to="/" className="h-10">
                    <img
                        className="h-full object-cover"
                        src={cinemaLogo}
                        alt="cinema logo"
                    />
                </Link>
                <button onClick={onOpen} className="inline-block px-2 cursor-pointer">
                    <ImSearch size={24} color={'red'}/>
                </button>
            </div>
        </div>
    );
}

export default Header;
