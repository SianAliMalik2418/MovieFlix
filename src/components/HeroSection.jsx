import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackToTopButton from "../components/BackToTopButton";
import { heroSectionBigImagePosters } from "./Context";


function HeroSection() {
  let navigate = useNavigate();

  let [inputValue, setInputValue] = useState("");
  let [searchQuery, setSearchQuery] = useState("");
  let [heroSectionBigImage, setHeroSectionBigImage] = useState("");


  
  useEffect(() => {
    // Generating Random posters every time the page loads...
    let randomNumber = Math.floor(Math.random() * 7);
    setHeroSectionBigImage(heroSectionBigImagePosters[randomNumber]);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    navigate(`/search/${inputValue}`);
  };

  return (
    <div className='h-screen w-full overflow-hidden relative'>
      <div className='relative h-screen'>
        <div className='h-full'>
          <img
            className='h-screen w-screen lg:max-w-auto absolute left-0 top-0 object-cover object-center'
            src={heroSectionBigImage}
            alt=''
          />
        </div>
        <BackToTopButton />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-[0.4]'></div>

        <div className='absolute z-20 top-0 left-0 flex items-center h-screen w-full justify-center flex-col mt-10'>
          <h1 className='text-7xl font-bold text-white heroSectionBigText sm:text-5xl xsm:text-4xl'>Welcome.</h1>
          <h3 className='text-xl xsm:px-2 xsm:mt-3 text-white sm:text-lg flex items-center justify-center text-center xsm:text-base'>
            Millions of movies, TV shows, and people to discover. Explore now.
          </h3>

          <form action='' className='mt-10 shadow-xl p-3 px-10 flex flex-nowrap' onSubmit={handleFormSubmit}>
            <input
              type='text'
              placeholder='Search for a movie or TV show....'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className='bg-white outline-none py-4 text-left w-[30rem] rounded-l-2xl px-5 text-black placeholder:text-black sm:w-[15rem] xsm:w-[10rem] '
            />
            <button type='submit' className='w-[8rem] py-4 px-5 rounded-r-2xl bg-red-600 text-white xsm:w-[8rem]'>
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
