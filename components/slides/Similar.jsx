"use client";
import React, { useState, useEffect } from "react";
import apiSettings from "@/api";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import SlideLayout from "../SlideLayout";
import Cards from "../Cards";

const Similar = () => {
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const mediaType = searchParams.get("media_type");

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `${apiSettings.baseUrl}${mediaType}/${id}/similar${apiSettings.urlQuery}`
      );
      setData(data.results);
    })();
  }, []);

  return (
    <section className="my-14">
      <div className="flex justify-start items-center gap-2">
        <h3 className="text-2xl font-extrabold mb-2 capitalize">{`Similar ${mediaType}s you must watch`}</h3>
      </div>

      <SlideLayout>
        <Cards data={data} media_type={mediaType} />
      </SlideLayout>
    </section>
  );
};

export default Similar;
