
import NoPosterImage from "../assets/no-poster.png"

import { FaStar } from "react-icons/fa"
import ImgLazyLoading from "./ImageLazyLoading";
import { Link } from 'react-router-dom';

import dayjs from "dayjs";
import { imgPath } from "./Context";


function Card({ original_title, poster_path, release_date,onCardClick, vote_average, media_type ,original_name,first_air_date,id }) {


  


  return (

<Link to={`/${media_type}/${id}`}>

<div className=' h-[30rem] w-[15rem]  rounded-xl  overflow-hidden hover:scale-[1.05] shadow-2xl relative  transition-all cursor-pointer' >

    

      <div className=" h-[70%] w-full">
        <ImgLazyLoading className='cardImage h-[100%]  w-full hover:opacity-[.6]' src={poster_path?(`${imgPath + poster_path}`): NoPosterImage} alt={NoPosterImage} />
      </div>


      <h1 className='movieName z-10 text-left font-medium text-lg text-white  mx-3 overflow-hidden whitespace-nowrap overflow-ellipsis mt-10'>{original_title || original_name}</h1>


      <div className='flex items-center justify-between mt-3'>
        <div className='rating flex items-center gap-2'>
          <FaStar color='yellow' className='ml-3' />
          <h1 className={`text-white font-semibold `}>{vote_average.toFixed(1)} </h1>
        </div>
        <div className="date">
          <h1 className='text-white font-thin bg-[#313036] px-2 mx-3'>{`${dayjs(release_date).format("MMM DD, YYYY")}` || `${dayjs(first_air_date).format("MMM DD, YYYY")}`}</h1>
        </div>
      </div>




    </div>
</Link>


  )
}

export default Card