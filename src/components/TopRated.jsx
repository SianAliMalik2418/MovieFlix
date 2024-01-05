import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loading from '../components/Loading';

import { API_KEY, settings } from './Context';
import axios from 'axios';

function TopRated({ category, subCategory1, subCategory2 }) {


    const [loading, setLoading] = useState(true);

    const [topRatedData, setTopRatedData] = useState([]);
    const [showType, setShowType] = useState("movie");

    let topRatedDataUrl = `https://api.themoviedb.org/3/${showType}/top_rated?api_key=${API_KEY}`






    useEffect(function () {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(topRatedDataUrl);
                setTopRatedData(data.results);
                setLoading(false)

            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };

        fetchData();
    }, [topRatedDataUrl]);


    return (
        <div className='parent p-2'>
            <div className='top-card-content flex items-center justify-between h-16 px-3 mt-14 xsm:gap-12 '>
                <h1 className='text-2xl text-white font-bold  '>{category}</h1>
                <div className='flex items-center justify-between gap-5 mr-10 rounded-lg w-68  text-black'>
                    <label className="radio-button ">
                        <input type="radio" name="example-radio" className='cursor-pointer' defaultValue="option1" onClick={() => { setShowType("movie"); setLoading(true) }} />
                        <span className="radio cursor-pointer" />
                        {subCategory1}
                    </label>
                    <label className="radio-button ">
                        <input type="radio" name="example-radio" className='cursor-pointer' defaultValue="option2" onClick={() => { setShowType("tv"); setLoading(true) }} />
                        <span className="radio cursor-pointer " />

                        {subCategory2}
                    </label>
                </div>
            </div>

            <div className='card-container p-2 px-5 '>
                {
                    loading ? (<Loading />) : (
                        <Slider {...settings} className=' pl-1 pt-5 ' >

                            {topRatedData?.map(function ({ original_title, poster_path, release_date, vote_average, id, original_name, first_air_date }) {
                                return (
                                    <div key={id}>
                                        {
                                            <div className=' px-4 py-2 flex items-center justify-center '>
                                                <Card original_title={original_title} poster_path={poster_path} release_date={release_date} id={id} first_air_date={first_air_date} media_type={showType} vote_average={vote_average} original_name={original_name} />
                                            </div>


                                        }
                                    </div>

                                )
                            })}


                        </Slider>
                    )
                }

            </div>
        </div>
    );
}

export default TopRated;
