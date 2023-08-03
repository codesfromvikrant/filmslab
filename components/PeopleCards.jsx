import React from "react";
import NoImage from "@/public/no_image.jpg";
import apiSettings from "@/api";

const PeopleCards = ({ data }) => {
  console.log(NoImage);
  const cards = data.map((el, i) => {
    if (i > 11) return;
    if (el === undefined) return;
    return (
      <div
        key={el.id}
        className="w-min max-h-full rounded relative bg-white p-2 shadow cursor-pointer"
      >
        <img
          src={
            el.profile_path
              ? `${apiSettings.IMAGE_BASE_URL}${el.profile_path}`
              : NoImage.src
          }
          className="md:max-w-[9rem] max-w-[12rem] h-auto rounded"
        />
        <p className="w-full font-semibold text-base text-gray-800 mt-1">
          {el.name}
        </p>
        <p className="font-medium w-full text-sm text-gray-600">
          {el.character}
        </p>
      </div>
    );
  });

  return <>{cards}</>;
};

export default PeopleCards;
