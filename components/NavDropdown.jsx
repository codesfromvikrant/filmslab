import React from "react";
import Link from "next/link";

const NavDropdown = ({ data, media_type }) => {
  const navList = data.map((item) => (
    <div
      key={item.name}
      className="capitalize w-max font-medium text-gray-600 hover:text-blue-500 transition-all duration-500"
    >
      <Link href={item.path ? item.path : `/${media_type}?genres=${item.id}`}>
        {item.name}
      </Link>
    </div>
  ));

  return (
    <div className="absolute z-50 bg-white p-4 rounded-md shadow-lg">
      {navList}
    </div>
  );
};

export default NavDropdown;
