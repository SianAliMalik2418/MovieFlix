// AllTvShows component
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import Loading from '../components/Loading';
import BackToTopButton from '../components/BackToTopButton';
import Card from './Card';

function AllTvShows() {
  const [tvShowsContent, setTvShowsContent] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [tvShowsPage, setTvShowsPage] = useState(1);

  const media_type = "tv";

  useEffect(() => {
    async function fetchTvShows() {
      const newTvShowsUrl = `https://api.themoviedb.org/3/discover/tv?api_key=b0032bc987ca01e6a7c02268f471ca6b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${tvShowsPage}`;

      try {
        const { data: newContent } = await axios.get(newTvShowsUrl);

        if (newContent.results.length > 0) {
          setTvShowsContent((prevContent) => [...prevContent, ...newContent.results]);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching more data:', error);
      }
    }
    fetchTvShows();

   
  }, [tvShowsPage]);

  return (
    <div className="bg-[#04152D]" >
      <div className="h-20"></div>

      <div>
        <div className="max-w-[1280px] m-auto  flex flex-col py-10 px-5">
          <div>
            <h1 className="text-white font-bold text-3xl mt-4" id='tvShows'>Explore Tv Shows</h1>
          </div>
          <BackToTopButton/>


          <InfiniteScroll
            dataLength={tvShowsContent?.length}
            next={() => setTvShowsPage((prev) => prev + 1)}
            hasMore={hasMore}
            loader={<Loading />}
            endMessage="How did u managed to come herE??? BRO YOU A MONSTER!!"
          >
            <div className="w-full flex items-center gap-5 mt-10 p-2 justify-center flex-wrap">
              {tvShowsContent?.map(({ original_title, poster_path, release_date,vote_average, id, original_name }) => (
                <div key={id}>
                  <Card
                    original_title={original_title}
                    poster_path={poster_path}
                    release_date={release_date}
                    vote_average={vote_average}
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

export default AllTvShows;
