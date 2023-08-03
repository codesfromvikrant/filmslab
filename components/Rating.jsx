import React from "react";

const Rating = ({ rating }) => {
  const bgColor = function (ratings) {
    if (Number(ratings) <= 3) return "#dc2626";
    if (Number(ratings) <= 7) return "#fbbf24";
    if (Number(ratings) <= 10) return "#16a34a";
  };
  const ratingStyle = {
    backgroundColor: bgColor(rating),
  };
  return (
    <div
      style={ratingStyle}
      className="flex justify-center items-center rounded-full shadow absolute -top-2 -left-2 w-8 h-8"
    >
      <p className="font-semibold font-Source text-sm text-gray-200">
        {rating.toFixed(1)}
      </p>
    </div>
  );
};

export default Rating;
