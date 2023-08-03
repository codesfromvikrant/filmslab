import React from "react";
import TrendingMovies from "./slides/TrendingMovies";
import TrendingTvshows from "./slides/TrendingTvshows";
import Genres from "./Genres";
import UpcomingMovies from "./slides/UpcomingMovies";
import AiringToday from "./slides/AiringToday";

const SlidesSections = () => {
  return (
    <main className="container max-w-6xl mx-auto py-14">
      <TrendingMovies />
      <TrendingTvshows />
      <Genres />
      <UpcomingMovies />
      <AiringToday />
    </main>
  );
};

export default SlidesSections;
