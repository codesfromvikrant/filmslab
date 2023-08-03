import React from "react";

const SlideLayout = ({ children }) => {
  return (
    <div className="flex justify-start items-start h-full gap-3 overflow-x-scroll overflow-y-hidden pt-4 pb-2 relative">
      {children}
    </div>
  );
};

export default SlideLayout;
