"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/tmdb_logo.svg";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { BiSolidDownArrow } from "react-icons/bi";
import NavDropdown from "./NavDropdown";
import apiSettings from "@/api";
import axios from "axios";

const popular = [
  { name: "movies", path: "/popular/movies" },
  { name: "tv shows", path: "/popular/tvshows" },
];

const toprated = [
  { name: "movies", path: "/top-rated/movies" },
  { name: "tv shows", path: "/top-rated/tvshows" },
];

const Header = () => {
  const [movies, setMovies] = useState([]);
  const [tvshows, setTvshows] = useState([]);
  const [open, setOpen] = useState({
    openPopular: false,
    openTopRated: false,
    openMovies: false,
    openTvShows: false,
  });

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(apiSettings.MOVIE_LIST);
      setMovies(data.genres);

      const { data: tvshows } = await axios.get(apiSettings.TV_LIST);
      setTvshows(tvshows.genres);
    })();
  }, []);

  return (
    <header className="bg-white shadow py-3 px-4">
      <div className="max-w-6xl mx-auto container flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <Image src={logo} className="sm:w-44 w-36" alt="Logo" />
          </Link>
        </div>

        <nav className="md:block hidden">
          <ul className="flex justify-start font-semibold text-gray-700 text-base items-center gap-4">
            <li
              onMouseLeave={() =>
                setOpen((prev) => {
                  return { ...prev, openPopular: false };
                })
              }
              className="relative"
            >
              <div
                onMouseOver={() =>
                  setOpen((prev) => {
                    return { ...prev, openPopular: true };
                  })
                }
                className="flex justify-start items-center gap-1 cursor-pointer hover:text-blue-500 transition-all duration-500"
              >
                <p>Popular</p>
                <BiSolidDownArrow className="text-xs" />
              </div>
              {open.openPopular && (
                <NavDropdown data={popular} media_type={movies} />
              )}
            </li>
            <li
              onMouseLeave={() =>
                setOpen((prev) => {
                  return { ...prev, openTopRated: false };
                })
              }
              className="relative"
            >
              <div
                onMouseOver={() =>
                  setOpen((prev) => {
                    return { ...prev, openTopRated: true };
                  })
                }
                className="flex justify-start items-center gap-1 cursor-pointer hover:text-blue-500 transition-all duration-500"
              >
                <p>Top Rated</p>
                <BiSolidDownArrow className="text-xs" />
              </div>
              {open.openTopRated && (
                <NavDropdown data={toprated} media_type={tvshows} />
              )}
            </li>
            <li
              onMouseLeave={() =>
                setOpen((prev) => {
                  return { ...prev, openMovies: false };
                })
              }
              className="relative"
            >
              <div
                onMouseOver={() =>
                  setOpen((prev) => {
                    return { ...prev, openMovies: true };
                  })
                }
                className="flex justify-start items-center gap-1 cursor-pointer hover:text-blue-500 transition-all duration-500"
              >
                <p>Movies</p>
                <BiSolidDownArrow className="text-xs" />
              </div>
              {open.openMovies && (
                <NavDropdown data={movies} media_type="movies" />
              )}
            </li>
            <li
              onMouseLeave={() =>
                setOpen((prev) => {
                  return { ...prev, openTvShows: false };
                })
              }
            >
              <div
                onMouseOver={() =>
                  setOpen((prev) => {
                    return { ...prev, openTvShows: true };
                  })
                }
                className="flex justify-start items-center gap-1 cursor-pointer hover:text-blue-500 transition-all duration-500"
              >
                <p>TV Shows</p>
                <BiSolidDownArrow className="text-xs" />
              </div>
              {open.openTvShows && (
                <NavDropdown data={tvshows} media_type="tvshows" />
              )}
            </li>
          </ul>
        </nav>
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
