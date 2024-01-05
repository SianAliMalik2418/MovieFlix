import ReactPlayer from 'react-player/youtube'
import { IoClose } from "react-icons/io5";
import { useState } from 'react';


function VideoPopup({videoId,playerOpen,setPlayerOpen,setVideoId}) {


    return (
        <>
            <IoClose size={"40px"} color='red' cursor={"pointer"} onClick={()=>{setPlayerOpen(false)} } className='absolute top-[50px] left-[1200px]' />
            <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls width={"80vw"} height={"70vh"} />
            </>
    
    )

}


export default VideoPopup