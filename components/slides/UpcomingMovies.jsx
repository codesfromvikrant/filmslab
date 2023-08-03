"use client";
import React, { useState, useEffect } from "react";
import apiSettings from "@/api";
import axios from "axios";
import SlideLayout from "../SlideLayout";
import Cards from "../Cards";

const UpcomingMovies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(apiSettings.UPCOMING_MOVIES);
      setData(data.results);
    })();
  }, []);

  return (
    <section className="my-14">
      <div className="flex justify-start items-center gap-2">
        <h3 className="text-2xl font-bold">Upcoming Movies</h3>
      </div>

      <SlideLayout>
        <Cards data={data} media_type="movie" />
      </SlideLayout>
    </section>
  );
};

export default UpcomingMovies;
