// AllMovies component
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import Loading from '../components/Loading';
import BackToTopButton from '../components/BackToTopButton';
import Card from './Card';

function AllMovies() {
  const [movieContent, setMovieContent] = useState([]);
  const [isHasMore, setIsHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const media_type = "movie"

  useEffect(() => {
    async function fetchMovies() {
      const newMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=b0032bc987ca01e6a7c02268f471ca6b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;

      try {
        const { data: newContent } = await axios.get(newMoviesUrl);

        if (newContent.results.length > 0) {
          setMovieContent((prevContent) => [...prevContent, ...newContent.results]);
        } else {
          setIsHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching more data:', error);
      }
    }

    fetchMovies();


  }, [page]);

  return (
    <div className="bg-[#04152D] relative">
      <div className="h-20"></div>

      <div>
        <div className="max-w-[1280px] m-auto  flex flex-col py-10 px-5">
          <div>
            <h1 className="text-white font-bold text-3xl mt-4">Explore Movies</h1>
          </div>
          <BackToTopButton />

          <InfiniteScroll
            dataLength={movieContent?.length}
            next={() => setPage((prevPage) => prevPage + 1)}
            hasMore={isHasMore}
            loader={<Loading />}
            endMessage="How did u managed to come herE??? BRO YOU A MONSTER!!"
          >
            <div className="w-full flex items-center gap-5 mt-6 p-2 justify-center flex-wrap">
              {movieContent?.map(({ original_title, poster_path, release_date, vote_average, id, original_name }) => (
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

export default AllMovies;
