"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import apiSettings from "@/api";
import axios from "axios";
import PeopleCards from "./PeopleCards";
import Similar from "./slides/Similar";

const CastCrew = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const mediaType = searchParams.get("media_type");
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await axios.get(
        `${apiSettings.baseUrl}${mediaType}/${id}/credits${apiSettings.urlQuery}`
      );
      setCast(res.data.cast);
    })();
  }, [mediaType, id]);

  console.log(cast);

  return (
    <div className="max-w-6xl mx-auto py-16">
      <h3 className="text-center text-3xl font-extrabold mb-3">
        Top Billed Cast
      </h3>
      <div className="grid xl:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 grid-cols-1 place-items-center gap-y-4 ">
        <PeopleCards data={cast} />
      </div>

      <Similar />
    </div>
  );
};

export default CastCrew;
