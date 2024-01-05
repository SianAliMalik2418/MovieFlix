import React, { useEffect, useState } from 'react'
import logoImage from '../assets/movieFlix.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa"
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md"

function Navbar() {

    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const location = useLocation()
    let navigate = useNavigate();


    function handleSearchForm(e) {
        e.preventDefault()
        setSearchQuery(inputValue)
        setInputValue("")
        navigate(`search/${inputValue}`)
        setIsSearchOpen(false);

    }

    

    return (
        <div className='flex '>
            <div className=' bg-black/[.3] z-20 absolute backdrop-blur-sm  w-full px-10 py-3 flex items-center justify-between'>
                <div>
                    <Link to={"/"}>
                        <img src={logoImage} className='object-contain w-14' alt="" />

                    </Link>
                </div>
                <div className='flex items-center gap-6 text-white'>
                    <Link to={"/AllMovies"} className={`${location.pathname === "/AllMovies" ? `text-pink-500` : ""}  transition-all hover:text-pink-500 sm:hidden`}>Movies</Link>
                    <Link to={"/AllTvShows"} className={`${location.pathname === "/AllTvShows" ? `text-pink-500` : ""} transition-all hover:text-pink-500 sm:hidden`}>Tv Shows</Link>

                    <FaSearch className='cursor-pointer' onClick={() => setIsSearchOpen(!isSearchOpen)} />
                    <IoMdMenu size={30} className='hidden sm:inline-block' onClick={() => setIsMenuOpen(!isMenuOpen)} />

                </div>
            </div>

            {
                isSearchOpen ? (
                    <form onSubmit={handleSearchForm} className='h-12  w-full bg-white px-10 py-2 absolute opacity-1 transition-all duration-300 top-20 z-30 flex justify-between items-center'>
                        <input type="text" placeholder='Search for a Movie or Tv Show...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='text-lg w-full px-2 outline-none' />
                        <MdClose className='cursor-pointer' size={35} onClick={() => setIsSearchOpen(!isSearchOpen)} />
                    </form>
                ) : (
                    <form className='opacity-0 h-12 w-full bg-white px-10 py-2 absolute  top-20 z-30 flex justify-between items-center'>
                    </form>
                )
            }

            {
                isMenuOpen ? (
                    <div className={`bg-[#04152D] h-36  w-full absolute top-20 opacity-1 z-40 flex flex-col transition-all duration-300 gap-5 text-white text-2xl px-5 py-5`}>
                        <Link to={"/AllMovies"} className={`${location.pathname === "/AllMovies" ? `text-pink-500` : ""}  transition-all hover:text-pink-500 `}>Movies</Link>
                        <Link to={"/AllTvShows"} className={`${location.pathname === "/AllTvShows" ? `text-pink-500` : ""} transition-all hover:text-pink-500`}>Tv Shows</Link>
                    </div>
                ) : (
                    <div className={`bg-[#04152D] h-36  w-full absolute top-20 hidden opacity-0 z-40  flex-col transition-all duration-300 gap-5 text-white text-2xl px-5 py-5`}>
                        <Link to={"/AllMovies"} className={`${location.pathname === "/AllMovies" ? `text-pink-500` : ""}  transition-all hover:text-pink-500 `}>Movies</Link>
                        <Link to={"/AllTvShows"} className={`${location.pathname === "/AllTvShows" ? `text-pink-500` : ""} transition-all hover:text-pink-500`}>Tv Shows</Link>
                    </div>
                )
            }


        </div>

    )
}

export default Navbar