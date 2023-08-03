import React, { useState, useEffect } from "react";
import apiSettings from "@/api";
import axios from "axios";
import Rating from "./Rating";

const SearchDropdown = ({ value }) => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `${apiSettings.SEARCH_MULTI}&query=${value.toLowerCase()}`
      );
      setSearchData(data.results);
    })();
  }, [value]);

  const results = searchData
    .filter((el) => el.media_type != "person")
    .map((el, i) => {
      if (i > 10) return;

      const bgColor = function (ratings) {
        if (Number(ratings) <= 3) return "#dc2626";
        if (Number(ratings) <= 7) return "#fbbf24";
        if (Number(ratings) <= 10) return "#16a34a";
      };
      const ratingStyle = {
        backgroundColor: bgColor(el.vote_average),
      };

      return (
        <div
          key={el.id}
          className="flex justify-between items-center py-2 border-t-[0.2px] border-b-[0.2px] border-gray-200"
        >
          <div className="flex justify-start items-center gap-2">
            <div
              style={ratingStyle}
              className="text-white text-sm font-medium w-max px-3 rounded"
            >
              {el.vote_average.toFixed(1)}
              <span> &#9733;</span>
            </div>
            <p className="text-sm  font-semibold">
              {el.original_title ? el.original_title : el.original_name}
            </p>
          </div>
          <p className="text-sm bg-gray-800 rounded px-3 text-white capitalize">
            {el.media_type}
          </p>
        </div>
      );
    });

  return (
    <div className="w-full bg-white shadow-lg p-3 absolute top-14 z-[99] rounded-md">
      {results}
    </div>
  );
};

export default SearchDropdown;
