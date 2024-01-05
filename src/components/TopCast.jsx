import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import NoPosterImage from "../assets/no-poster.png"

import { imgPath } from './Context';
import ImgLazyLoading from '../components/ImageLazyLoading';

function TopCast() {

    const { id,media_type } = useParams();
    const [topCastData, setTopCastData] = useState([]);
    const [loading, setLoading] = useState(true);

    

    const TopCast_Url = `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=b0032bc987ca01e6a7c02268f471ca6b`

    useEffect(() => {
        async function fetchTopCast() {
            try {
                const { data } = await axios.get(TopCast_Url);
                setTopCastData(data.cast)
                setLoading(false)
            }
            catch (err) {
                console.log(err);
            }

        }
        fetchTopCast()
    }, [TopCast_Url])



    return (
        <div className='   max-w-[1200px] m-auto  pb-10 pl-3 '>
            <h1 className='text-[white] text-2xl mt-32 mb-2 smd:mt-5 '>Top cast</h1>
            <div className=' h-[20rem] px-5 py-2 flex overflow-x-scroll castDiv overflow-y-hidden scrollbar-hidden items-center gap-5'  style={{ scrollbarWidth: 'none'}}>

                {
                    loading ? (<Loading />) : (
                        topCastData?.map(function ({ name, profile_path,character }) {
                            return (
                                <div key={name}>
                                    <div className=' h-[20rem] w-44 flex flex-col  items-center justify-center'>
                                        <ImgLazyLoading
                                            src={profile_path?(`${imgPath + profile_path}`):(NoPosterImage)}
                                            alt=""
                                            className='w-[150px] h-[150px] object-cover object-center rounded-full mb-5'
                                        />
                                        <p className='text-white font-semibold text-lg'>{name}</p>
                                        <p className='text-[#9b9999] mt-2' >{character}</p>

                                    </div>
                                </div>

                            )


                        })
                    )

                }



            </div>
        </div>
    )
}

export default TopCast