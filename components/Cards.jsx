import React, { useState, useEffect } from "react";
import apiSettings from "@/api";
import Rating from "./Rating";
import NoImage from "@/public/no_image.jpg";
import { useRouter } from "next/navigation";
import Loading from "./Loading";

const Cards = ({ data, media_type }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (data.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [data]);

  const cards = data.map((el) => {
    return (
      <div
        onClick={() => {
          router.push(`/info?media_type=${media_type}&id=${el.id}`);
        }}
        key={el.id}
        className="w-min max-h-full rounded relative cursor-pointer"
      >
        <img
          loading="lazy"
          src={
            el.poster_path
              ? `${apiSettings.IMAGE_BASE_URL + el.poster_path}`
              : NoImage.src
          }
          className="md:max-w-[9rem] max-w-[12rem] h-auto rounded-md"
        />
        <Rating rating={el.vote_average} />
      </div>
    );
  });

  return (
    <>
      {cards}
      {loading && <Loading />}
    </>
  );
};

export default Cards;
