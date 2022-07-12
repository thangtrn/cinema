import React from "react";
import { Link } from "react-router-dom";
import { imageUrl } from "../../ulti/tmdbApi";

function SidebarItem({ posterPath, title, to }) {
    console.log(posterPath, title, to);
    return (
        <Link
            to={to}
            className="w-full rounded-md bg-dark-darken items-center p-2 flex gap-2 "
        >
            <img width={60} src={imageUrl.w200 + posterPath} alt={title} />
            <div className="">{title}</div>
        </Link>
    );
}

export default SidebarItem;
