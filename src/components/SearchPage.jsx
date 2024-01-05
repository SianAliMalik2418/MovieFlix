import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from './Context';
import { useParams } from 'react-router-dom';
import SearchCard from './SearchCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../components/Loading';
import BackToTopButton from '../components/BackToTopButton';

function SearchPage() {
  const { searchQuery } = useParams();
  let [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  let [searchedContent, setSearchedContent] = useState([]);

  async function fetchSearchData() {
    const SEARCH_URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`;

    try {
      const { data } = await axios.get(SEARCH_URL);

      if (data.results.length > 0) {
        setSearchedContent((prevContent) => [...prevContent, ...data.results]);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(()=>{
   setSearchedContent([])
  },[searchQuery])

  useEffect(() => {
    fetchSearchData();
  }, [page, searchQuery]);

  return (
    <div className="bg-[#04152D] relative">
      <div className="h-20"></div>
      <div>
        <div className="max-w-[1280px] m-auto  flex flex-col py-10 px-5">
          <div>
            <h1 className="text-white font-bold text-3xl mt-4">Results for {searchQuery}</h1>
          </div>
          <BackToTopButton />
          <InfiniteScroll
            dataLength={searchedContent?.length}
            next={()=> setPage((prev) => prev + 1)} // Call the function to fetch more data
            hasMore={hasMore}
            loader={<Loading />}
            endMessage={<h1 className='text-center text-white font-bold mt-16 text-2xl'>All Sett!!</h1>}
          >
            <div className="w-full flex items-center gap-5 mt-6 p-2 justify-center flex-wrap">
              {searchedContent?.map(({ original_title , poster_path, media_type, release_date, id, original_name },i) => (
                <div key={i}>
                  <SearchCard
                    original_title={original_title}
                    poster_path={poster_path}
                    release_date={release_date}
                    original_name={original_name}
                    id={id}
                    media_type = {media_type}
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
