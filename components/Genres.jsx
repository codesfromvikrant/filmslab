"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import apiSettings from "@/api";
import { useRouter } from "next/navigation";

const Genres = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(apiSettings.MOVIE_LIST);
      setData(data.genres);
    })();
  }, []);

  // console.log(data);

  const genresList = data.map((el) => {
    return (
      <div
        key={el.id}
        onClick={() => {
          router.push(`/movies?genres=${el.id}`);
        }}
        className="flex justify-between items-center text-gray-900 bg-gradient-to-r from-white to-pink-100 shadow-md cursor-pointer py-2 px-4 rounded-md"
      >
        <p className="font-medium text-gray-800">{el.name}</p>
      </div>
    );
  });

  return (
    <div>
      <div className="text-2xl font-bold">All Genres</div>
      <div className="flex justify-start items-center flex-wrap gap-5 mt-3">
        {genresList}
      </div>
    </div>
  );
};

export default Genres;
