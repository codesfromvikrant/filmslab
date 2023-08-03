import React from "react";

const GridLayout = ({ title, children }) => {
  return (
    <section className="max-w-6xl mx-auto my-16 xl:px-0 md:px-8 px-4">
      <h3 className="text-3xl font-source font-bold">{title}</h3>
      <div className="grid xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-1 place-items-center gap-y-4 mt-6">
        {children}
      </div>
    </section>
  );
};

export default GridLayout;
