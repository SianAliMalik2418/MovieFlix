import React, { useEffect, useState } from 'react'
import { API_KEY } from './Context'
import axios from 'axios';
import Card from './Card';
import { useParams } from 'react-router-dom';

function Recommendations() {

  const {id,media_type} = useParams()

  const recommendedMoviesUrl = `https://api.themoviedb.org/3/${media_type}/${id}/recommendations?api_key=${API_KEY}`

  const [recommendedMoviesData, setRecommendedMoviesData] = useState([]);

  const [mediaTypeForHeading,setMediaTypeForHeading] = useState("");

  


  useEffect(() => {
    async function fetchRecommendedShows() {
        try {
            const { data } = await axios.get(recommendedMoviesUrl);
            setRecommendedMoviesData(data.results);
            
        }
        catch (err) {
            console.log(err);
        }

    }

    if(media_type == "tv")
  {
    setMediaTypeForHeading("Tv Shows")
  }

  else{
    setMediaTypeForHeading("Movies")
  }

    fetchRecommendedShows()
}, [recommendedMoviesUrl])


  return (
    <>
      <div className='   max-w-[1200px] m-auto  pb-10 pl-3'>
        <h1 className='text-[white] text-2xl mt-10 mb-5'>Recommended {mediaTypeForHeading}</h1>
        <div className=' h-[30rem] px-5 py-2 flex overflow-x-scroll   overflow-y-hidden scrollbar-hidden items-center gap-5' style={{ scrollbarWidth: 'none' }}>
{
  recommendedMoviesData?(
    recommendedMoviesData.map(function({ original_title, poster_path, release_date,first_air_date, vote_average, id, original_name })
    {
      return(
        <Card key={id} original_title={original_title} id={id} poster_path={poster_path} release_date={release_date} media_type = {media_type} first_air_date={first_air_date} vote_average={vote_average} original_name={original_name} />
  
      )
      
    })
  ):(
    <div>
      No Recommended Videos Available (API PROBLEM).
    </div>

  )
  
}
         

        </div>
      </div>
    </>

  )
}

export default Recommendations