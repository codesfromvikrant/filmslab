"use client";
import React, { useState } from "react";
import SearchDropdown from "./SearchDropdown";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-3 outline-none relative">
      <input
        onChange={(e) => {
          setDropdownOpen(true);
          setValue(e.target.value);
        }}
        value={value}
        type="text"
        className="w-full px-4 py-3  bg-gradient-to-r from-gray-50 to-gray-100 rounded-md border-2 border-blue-200 outline-none sm:text-base text-sm"
        placeholder="Search for Movies & TV Shows"
      />
      {/* <div className="w-full bg-slate-900 rounded-md absolute mt-3 z-50">
        {results}
      </div> */}
      {dropdownOpen && <SearchDropdown value={value} />}
    </div>
  );
};

export default SearchBar;
