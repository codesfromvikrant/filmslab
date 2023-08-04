"use client";
import React, { useState, useEffect } from "react";
import apiSettings from "@/api";
import axios from "axios";
import SlideLayout from "../SlideLayout";
import Cards from "../Cards";

const AiringToday = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(apiSettings.AIRING_TODAY_TV);
      setData(data.results);
    })();
  }, []);

  return (
    <section className="my-14">
      <div className="flex justify-start items-center gap-2">
        <h3 className="sm:text-2xl text-3xl text-gray-800 font-extrabold">
          TV Shows Airing Today
        </h3>
      </div>

      <SlideLayout>
        <Cards data={data} media_type="tv" />
      </SlideLayout>
    </section>
  );
};

export default AiringToday;
