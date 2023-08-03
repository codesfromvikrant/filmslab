"use client";
import React, { useState, useEffect } from "react";
import apiSettings from "@/api";
import axios from "axios";
import SlideLayout from "../SlideLayout";
import Cards from "../Cards";
import { BiTrendingUp } from "react-icons/bi";

const TrendingMovies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(apiSettings.TRENDING_MOVIES);
      setData(data.results);
    })();
  }, []);

  return (
    <section className="my-14">
      <div className="flex justify-start items-center gap-2">
        <h3 className="text-2xl font-bold">Trending In Movies</h3>
        <BiTrendingUp className="text-2xl text-red-500 font-semibold" />
        <select name="" id="">
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
        </select>
      </div>

      <SlideLayout>
        <Cards data={data} media_type="movie" />
      </SlideLayout>
    </section>
  );
};

export default TrendingMovies;
