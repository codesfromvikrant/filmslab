import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-start items-center gap-4">
      <div className="rotate-spinner w-[3rem] h-[3rem] bg-transparent border-4 border-gray-200  border-t-blue-300 border-l-blue-300 rounded-full"></div>
      <p className="text-lg">Loading...</p>
    </div>
  );
};

export default Loading;
