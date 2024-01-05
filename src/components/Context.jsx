import moviePoster1 from "../assets/batmanTeam.jpg";
import moviePoster2 from "../assets/Mortal Kombat Movie Poster.jpg";
import moviePoster3 from "../assets/batman.jpg";
import moviePoster4 from "../assets/Dog Movie Poster.jpg";
import moviePoster5 from "../assets/Joker Movie Poster.jpg";
import moviePoster6 from "../assets/Homelander Movie Poster.png";
import moviePoster7 from "../assets/SpiderMan Movie Poster.jpg";
import moviePoster8 from "../assets/aquaman.jpg";

export var heroSectionBigImagePosters = [moviePoster1, moviePoster2, moviePoster3, moviePoster4, moviePoster5, moviePoster6, moviePoster7, moviePoster8]

export var imgPath = "https://image.tmdb.org/t/p/w1280";
export const API_KEY = "b0032bc987ca01e6a7c02268f471ca6b"


// Slider Setting...
export const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive:[
        {
            breakpoint: 1180,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },

        {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              initialSlide: 2

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
    ]
  };


  

