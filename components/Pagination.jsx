"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Pagination = ({ totalPages, setPage }) => {
  const searchParams = useSearchParams();
  const page = searchParams.has("page") ? searchParams.get("page") : 1;

  useEffect(() => {
    setPage(page);
  }, [page]);

  let arr = []; // Create an empty array
  const btnCount = 4;

  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(startPage + btnCount - 1);

  for (let i = startPage; i <= endPage; i++) {
    arr.push(i);
  }

  const pageBtn = arr.map((page) => {
    const query = `?page=${page}`;

    return (
      <Link key={page} href={query}>
        <button
          onClick={() => {
            setPage(page);
          }}
          className="page-btn sm:text-base text-xs bg-gray-200 shadow hover:shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 py-2 px-3 rounded"
        >
          {page}
        </button>
      </Link>
    );
  });

  const nextpage = () => {
    arr = [];
    if (startPage + btnCount > totalPages) return;
    setStartPage((prev) => prev + btnCount);
    setEndPage((prev) => prev + btnCount);
  };

  const prevpage = () => {
    arr = [];
    if (startPage - btnCount < 1) return;
    setStartPage((prev) => prev - btnCount);
    setEndPage((prev) => prev - btnCount);
  };

  return (
    <div className="pagination flex justify-center items-center flex-wrap gap-2 mb-10">
      <button
        onClick={prevpage}
        className="bg-gray-200 sm:text-base text-xs py-2 px-4 shadow hover:shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 rounded"
      >
        Prev
      </button>
      {pageBtn}
      <button
        onClick={nextpage}
        className="bg-gray-200 sm:text-base text-xs py-2 px-4 shadow hover:shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-sm"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
