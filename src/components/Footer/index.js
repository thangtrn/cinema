import React from "react";
import { cinemaLogo } from "../../assets/img";
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai";

function Footer() {
    return (
        <div className="w-full bg-dark-darken mt-14 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <img src={cinemaLogo} alt="cinemaLogo" className="w-14" />
                <div className="flex gap-2">
                    <AiFillFacebook size={22} color={"white"} />
                    <AiFillInstagram size={22} color={"white"} />
                    <AiFillGithub size={22} color={"white"} />
                </div>
            </div>
        </div>
    );
}

export default Footer;
