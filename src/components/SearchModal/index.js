import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
function SearchModal({ onOpen }) {
    const [searchValue, setSearchValue] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate({
            pathname: "/search",
            search: `query=${searchValue}`,
        });
        onOpen();
    };

    return (
        <div className="search-css fixed top-[80px] left-1/2 bg max-w-2xl w-[672px] bg-dark rounded-md z-50 p-4 translate-x-[-50%]">
            <form className="flex gap-2" onSubmit={handleSubmit}>
                <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text"
                    className="w-full outline-none py-2 px-6 text-gray-800 rounded-sm"
                    placeholder="Enter movie...."
                />
                <button
                    type="submit"
                    className="bg-blue-500 px-4 py-2 rounded-sm"
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchModal;
