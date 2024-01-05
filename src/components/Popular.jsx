import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loading from '../components/Loading';

import axios from 'axios';
import { API_KEY, settings } from './Context';

function Popular({ category, subCategory1, subCategory2 }) {

    const [loading, setLoading] = useState(true);
    const [popularData, setPopularData] = useState([]);
    const [media_type, setMediaType] = useState("movie");

    let popularURL = `https://api.themoviedb.org/3/discover/${media_type}?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`



    useEffect(function () {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(popularURL);
                setPopularData(data.results);
                setLoading(false)

            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };

        fetchData();
    }, [popularURL, loading, media_type]);


    return (
        <div className='parent p-2'>
            <div className='top-card-content flex items-center justify-between h-16 px-3 mt-14 xsm:gap-9'>
                <h1 className='text-2xl text-white font-bold xsm:text-lg  '>{category}</h1>
                <div className='flex items-center justify-between gap-5 mr-10 rounded-lg w-68  text-black'>
                    <label className="radio-button ">
                        <input type="radio" className=' ' name="example-radio" defaultValue="option1" />
                        <span className="radio cursor-pointer" onClick={() => { setMediaType("movie"); setLoading(true) }} />
                        {subCategory1}
                    </label>
                    <label className="radio-button ">
                        <input type="radio" name="example-radio" defaultValue="option2" />
                        <span className="radio cursor-pointer" onClick={() => { setMediaType("tv"); setLoading(true) }} />

                        {subCategory2}
                    </label>
                </div>
            </div>

            <div className='card-container p-2 px-5 '>


                <Slider {...settings} className='pl-1 pt-5 '>

                {
                    loading?(<Loading/>):(
                        popularData?.map(function ({ original_title, poster_path, release_date,first_air_date, vote_average, id, original_name }) {
                            return (
                                <div key={id}>
    
                                    {
                                        <div className=' px-4 py-2 flex items-center justify-center'>
    
                                            <Card original_title={original_title} poster_path={poster_path} release_date={release_date} id={id} media_type={media_type}  first_air_date={first_air_date} vote_average={vote_average} original_name={original_name} />
                                        </div>
    
    
                                    }
                                </div>
    
                            )
                        })
                    )
                }
                   


                </Slider>



            </div>
        </div>
    );
}

export default Popular;
