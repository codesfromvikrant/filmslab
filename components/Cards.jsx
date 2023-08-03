import React from "react";
import apiSettings from "@/api";
import Rating from "./Rating";
import NoImage from "@/public/no_image.jpg";
import { useRouter } from "next/navigation";

const Cards = ({ data, media_type }) => {
  const router = useRouter();

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

  return <>{cards}</>;
};

export default Cards;
