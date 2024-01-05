import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loading from '../components/Loading';
import Card from './Card';
import axios from 'axios';
import { API_KEY, settings } from './Context';

function Trending({ category, subCategory1, subCategory2 }) {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trendingTimePeriod, setTrendingTimePeriod] = useState('day');

  const TRENDING_ENDPOINT = `/trending/all/${trendingTimePeriod}`;
  
  const API_URL = `https://api.themoviedb.org/3${TRENDING_ENDPOINT}?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setMovieData(data.results);
        setLoading(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [trendingTimePeriod]);

  

  return (
    <div className='parent p-2 '>
      <div className='top-card-content w-full flex items-center justify-between xsm:gap-8  h-16 px-3 mt-14'>
        <h1 className='text-2xl text-white font-bold '>{category}</h1>
        <div className='flex items-center justify-between gap-5 mr-10 rounded-lg w-68  text-black xsm:gap-1 '>
          <label className='radio-button'>
            <input type='radio' name='example-radio' defaultValue='option1' />
            <span className='radio cursor-pointer' onClick={() => {setTrendingTimePeriod('day'); setLoading(true)}  } />
            {subCategory1}
          </label>
          <label className='radio-button '>
            <input type='radio' name='example-radio' defaultValue='option2' />
            <span className='radio cursor-pointer' onClick={() => {setTrendingTimePeriod('week'); setLoading(true)} }/>
            {subCategory2}
          </label>
        </div>
      </div>

      <div className='card-container relative p-2 px-5  '>
        <Slider {...settings} className='pl-1 pt-5 '>
          {loading ? (
            <Loading />
          ) : (
            movieData?.map(function ({ original_title, poster_path, release_date,first_air_date, vote_average, id, original_name, media_type }) {
              return (
                <div key={id}>
                  <div className='px-4 py-2 flex items-center justify-center'>
                    <Card original_title={original_title} id={id} poster_path={poster_path} release_date={release_date} media_type = {media_type} first_air_date={first_air_date} vote_average={vote_average} original_name={original_name} />
                  </div>
                </div>
              );
            })
          )}
        </Slider>
      </div>
    </div>
  );
}

export default Trending;
