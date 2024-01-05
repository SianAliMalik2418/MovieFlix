import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImgLazyLoading from "./ImageLazyLoading";
import { API_KEY, imgPath } from './Context';
import Loading from '../components/Loading';
import BackToTopButton from '../components/BackToTopButton';
import NoPosterImage from "../assets/no-poster.png"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import { GoPlay } from "react-icons/go";
import dayjs from 'dayjs';
import TopCast from './TopCast';
import VideoPopup from '../components/VideoPopup';
import Similar from './Similar';
import Recommendations from './Recommendations';



function Details() {

  const { media_type, id } = useParams();


  const [movieDetailsData, setMovieDetailsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoId, setVideoId] = useState(238);
  const [playerOpen, setPlayerOpen] = useState(false);
  const [handleRunTime, setHandleRunTime] = useState("")



  let MovieDetailsUrl = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}`;
  let videoDetailsUrl = `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${API_KEY}`;



  async function fetchMovieDetails() {

    const { data } = await axios.get(MovieDetailsUrl);
    try {
      setMovieDetailsData(data);
      setLoading(false)
    }
    catch (err) {
      if (media_type === false) {
        console.log("OOps" + err);

      }
    }

  }

  async function fetchVideoDetails() {
    const { data } = await axios.get(videoDetailsUrl)
    try {
      setVideoId(data?.results[0]?.key);
    }
    catch (err) {
      console.log(err);
    }
  }

  function handleScroll() {
    window.scroll(
      {
        top: 0,
        behavior: 'smooth'
      }
    )
  }

  useEffect(() => {
    fetchMovieDetails();
    fetchVideoDetails();
    handleScroll();
  }, [MovieDetailsUrl])

  const { backdrop_path, vote_average, number_of_seasons, number_of_episodes, original_title, tagline, poster_path, overview, status, release_date, runtime, name } = movieDetailsData

  useEffect(function () {
    if (media_type === "tv") {
      setHandleRunTime(number_of_seasons + " Season and " + number_of_episodes + " Episodes");
    }

    else {
      setHandleRunTime(runtime)
    }
  }, [MovieDetailsUrl])

  return (
    <div className='w-screen relative   '>
      <BackToTopButton />
      {
        loading ? (
          <Loading />
        ) : (
          <>
            {
              playerOpen ? (
                <div className='z-40 absolute flex justify-center items-center backdrop-blur-sm w-screen h-screen transition-all' onClick={()=>setPlayerOpen(false)}>
                  <VideoPopup videoId={videoId} playerOpen={playerOpen} setPlayerOpen={(value) => setPlayerOpen(value)} setVideoId={setVideoId} />
                </div>

              ) : (
                ''
              )
            }


            <img src={poster_path ? (imgPath + backdrop_path) : (NoPosterImage)} className='w-screen h-[120vh]  smd:mb-[70vh] sm:mb-[30vh] xsm:mb-[450px] object-cover ' />
            <div className=' bg-gradient-to-b from-[#0000007a] to-[#04152D]   h-[120vh] w-full absolute top-0  '>
            </div>

            <div className='details-content flex absolute top-0 z-10 mt-32  p-2 max-w-[1200px] ml-28 gap-16  m-auto w-full xmd:ml-12 smd:flex-col smd:justify-center items-center smd:ml-0   ' >
              <div>
                <ImgLazyLoading src={poster_path ? (`${imgPath + poster_path}`) : NoPosterImage} className='w-[350px] h-[500px] border-white border-solid border-2 rounded-md object-cover  smd:h-screen smd:w-full sm:h-[60vh] xsm:h-[50vh]' />
              </div>

              <div className='flex flex-col gap-2 smd:align-left smd:w-full smd:mt-10  '>
                <h1 className='text-white font-semi-bold text-4xl'>{original_title || name}</h1>
                <p className='text-[#9b9999] italic font-semibold text-xl'>{tagline}</p>

                <div className='flex items-center gap-8 mt-5'>

                  <div className="circleRating w-[80px] h-[80px]">
                    <CircularProgressbar
                      value={vote_average?.toFixed(1)}
                      maxValue={10}
                      text={vote_average?.toFixed(1)}
                      styles={buildStyles({
                        pathColor:
                          vote_average < 5 ? "red" : vote_average < 7 ? "orange" : "green",
                        textColor: "white",
                        textSize: "2rem"
                      })}
                    />
                  </div>
                  <div onClick={() => setPlayerOpen(true)} className='flex gap-3 items-center font-bold text-xl hover:text-[#ff3557] transition-all  text-white cursor-pointer'>
                    <GoPlay size={"80px"} className=' ' />
                    <h1 className=' xmd:w-32 smd:w-full'>Watch Trailer</h1>
                  </div>

                </div>

                <div className='overview flex flex-col items-left mb-5 align-left  font-semibold text-white text-left mt-10 gap-1 w-[45vw]  xmd:w-[320px] smd:w-full xsm:mt-14  '>
                  <h1 className='text-left w-full text-2xl'>Overview</h1>
                  <p className=' flex  font-thin smd:w-full  '>{overview}</p>
                </div>

                <div className='text-lg flex flex-col items-left gap-5  px-2 py-1 '>
                  <h1 className='text-white font-semibold '>Status: <span className='text-[#b3b1b1] ml-1 font-thin'>{status}</span></h1>
                  <hr className='border-[gray]' />
                  <h1 className='text-white font-semibold '>Release date: <span className='text-[#b3b1b1] ml-1 font-thin'>{dayjs(release_date).format("MMM DD, YYYY")}</span></h1>
                  <hr className='border-[gray]' />
                  <h1 className='text-white font-semibold '>Run Time: <span className='text-[#b3b1b1] ml-1 font-thin '>{handleRunTime}</span></h1>
                </div>

                <hr className='border-[gray]' />



              </div>





            </div>

            <TopCast />
            <Similar />
            <Recommendations />
          </>
        )
      }

    </div>
  )
}

export default Details