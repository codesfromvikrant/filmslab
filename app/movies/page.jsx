"use client";
import React, { useState, useEffect, use } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import apiSettings from "@/api";
import GridLayout from "@/components/GridLayout";
import Cards from "@/components/Cards";
import Pagination from "@/components/Pagination";

const Movies = () => {
  const searchParams = useSearchParams();
  const genres = searchParams.has("genres") ? searchParams.get("genres") : "";
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    (async function () {
      const res = await axios.get(
        `${apiSettings.DISOVER_MOVIES_GENRES}${
          apiSettings.urlQuery
        }&with_genres=${genres.toLowerCase()}&page=${page}`
      );
      setTotalPages(res.data.total_pages);
      setData(res.data.results);
    })();
  }, [genres]);

  return (
    <main>
      <GridLayout title="Movies">
        <Cards data={data} media_type="movie" />
      </GridLayout>
      {data.length ? (
        <Pagination totalPages={totalPages} setPage={setPage} />
      ) : null}
    </main>
  );
};

export default Movies;
