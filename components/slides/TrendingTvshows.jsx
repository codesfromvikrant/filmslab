"use client";
import React, { useState, useEffect, useRef } from "react";
import apiSettings from "@/api";
import axios from "axios";
import SlideLayout from "../SlideLayout";
import Cards from "../Cards";
import { BiTrendingUp } from "react-icons/bi";

const TrendingTvshows = () => {
  const [data, setData] = useState([]);
  const [duration, setDuration] = useState("week");
  const selectRef = useRef(null);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `${apiSettings.TRENDING_TV}${duration}${apiSettings.urlQuery}`
      );
      setData(data.results);
    })();
  }, [duration]);

  const changeDuration = () => {
    if (!selectRef.current) return;
    const value = selectRef.current.value;
    setDuration(value);
  };

  return (
    <section className="my-14">
      <div className="flex justify-start items-center gap-2">
        <h3 className="text-2xl font-bold">Trending In TV Shows</h3>
        <BiTrendingUp className="text-3xl text-red-500 font-semibold" />
        <select
          onChange={changeDuration}
          ref={selectRef}
          className="text-gray-200 bg-gray-800 py-2 px-4 cursor-pointer rounded"
        >
          <option value="week">Weekly</option>
          <option value="day">Daily</option>
        </select>
      </div>

      <SlideLayout>
        <Cards data={data} media_type="tv" />
      </SlideLayout>
    </section>
  );
};

export default TrendingTvshows;
