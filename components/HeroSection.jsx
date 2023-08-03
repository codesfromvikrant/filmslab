"use client";
import apiSettings from "@/api";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await axios.get(apiSettings.POPULAR_MOVIES);
      const data = await res.data;
      setMovies(data.results);
    })();
  }, []);

  const slides = movies
    .filter((el, i) => {
      return i < 5;
    })
    .map((movie) => {
      const style = {
        backgroundImage: `linear-gradient(45deg, #00000096, #00000049), url(${apiSettings.IMAGE_BASE_URL}/${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "33rem",
      };
      return (
        <SwiperSlide key={movie.id}>
          <div style={style} className="pb-16">
            <div className="max-w-6xl mx-auto h-full flex flex-col justify-end items-start">
              <h1 className="text-5xl text-start font-semibold w-2/3 text-white">
                {movie.title}
              </h1>
              <p className="text-gray-200 mb-5 mt-2 text-lg leading-tight text-start  w-2/3">
                {movie.overview}
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md">
                View More Info
              </button>
            </div>
          </div>
        </SwiperSlide>
      );
    });

  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default HeroSection;
