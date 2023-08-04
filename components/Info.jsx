import React from "react";
import apiSettings from "@/api";
import NoImage from "@/public/no_image.jpg";

const Info = ({ data, media_type }) => {
  let backgroundImage = `${apiSettings.IMAGE_BASE_URL}${data.backdrop_path}`;
  let posterImage = `${apiSettings.IMAGE_BASE_URL}${data.poster_path}`;

  const style = {
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const bgColor = function (ratings) {
    if (Number(ratings) <= 3) return "#dc2626";
    if (Number(ratings) <= 7) return "#fbbf24";
    if (Number(ratings) <= 10) return "#16a34a";
  };
  const ratingStyle = {
    backgroundColor: bgColor(data.vote_average),
  };

  // Convert a number to money formatting
  const convertMoney = (money) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
    return formatter.format(money);
  };

  return (
    <section
      style={style}
      className="py-16 px-6 w-full flex justify-center items-center"
    >
      <div className="flex justify-start items-start sm:flex-row flex-col sm:gap-0 gap-5 sm:bg-[#000000ae] bg-transparent xl:max-w-6xl max-w-full  rounded-md relative z-1">
        <div className="sm:w-1/3 w-full">
          <img
            src={posterImage ? posterImage : NoImage.src}
            className="w-full rounded-md sm:shadow-none shadow-2xl"
            alt=""
          />
        </div>

        <div className="h-full sm:bg-transparent  bg-[#000000ae] rounded-md text-white sm:w-2/3 xl:p-12 p-6">
          <div
            style={ratingStyle}
            className="w-max px-4 py-1 rounded flex justify-start items-center gap-1"
          >
            <p className="text-sm">{data.vote_average}</p>
            <p> &#9733;</p>
            {/* <img src={starIcon} className="w-4" /> */}
          </div>
          <h1 className="xl:text-4xl sm:text-3xl text-2xl font-sans uppercase sm:font-bold font-extrabold tracking-wide">
            {data.original_title ? data.original_title : data.original_name}
          </h1>
          <h4 className="text-sm text-gray-300">{data.tagline}</h4>

          <p className="pt-5 font-light text-sm">{data.overview}</p>
          <div className="py-1 flex flex-wrap gap-2">
            {data.genres.map((genres) => {
              return (
                <p
                  className="bg-slate-600 text-sm shadow-xl px-4 py-1 rounded"
                  key={genres.id}
                >
                  {genres.name}
                </p>
              );
            })}
          </div>

          <h3 className="text-white text-xl font-semibold pt-5 pb-1">
            Movie Info
          </h3>
          <div className="text-sm font-semibold">
            <div className="text-white py-1">
              Release Date :{" "}
              <span className=" text-gray-300 pl-2">
                {data.release_date ? data.release_date : data.first_air_date}
              </span>
            </div>
            <div className="py-1 border-t-2 border-b-2 border-[#ffffff2c]">
              Budget :{" "}
              <span className="text-gray-300 pl-2">
                {data.budget ? convertMoney(data.budget) : "N/A"}
              </span>
            </div>
            <div className="py-1">
              Revenue :{" "}
              <span className="text-gray-300 pl-2">
                {data.revenue ? convertMoney(data.revenue) : "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
