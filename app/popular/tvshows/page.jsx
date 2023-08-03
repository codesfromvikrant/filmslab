"use client";
import React, { useState, useEffect } from "react";
import GridLayout from "@/components/GridLayout";
import Cards from "@/components/Cards";
import apiSettings from "@/api";
import axios from "axios";
import Pagination from "@/components/Pagination";

const PopularTvshows = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `${apiSettings.POPULAR_TV}&page=${page}`
      );
      setTotalPages(data.total_pages);
      setData(data.results);
    })();
  }, [page]);

  return (
    <main>
      <GridLayout title="Popular TV Shows">
        <Cards data={data} media_type="tv" />
      </GridLayout>
      {data.length ? (
        <Pagination totalPages={totalPages} setPage={setPage} />
      ) : null}
    </main>
  );
};

export default PopularTvshows;
