import React from 'react'
import Trending from './Trending'
import Popular from './Popular'
import TopRated from './TopRated'

function CardsContainer() {

    // bg-[#04152D]

  return (
    <div className=' max-w-[1300px] m-auto   '>
       <Trending category = {"Trending"}  subCategory1 = {"Day"}  subCategory2 = {"Week"}/>
       <Popular category = {"What's Popular"}  subCategory1 = {"Movies"}  subCategory2 = {"TV Shows"}/>
       <TopRated category = {"Top rated"} subCategory1 = {"Movies"}  subCategory2 = {"TV Shows"}/>
       
    </div>
  )
}

export default CardsContainer