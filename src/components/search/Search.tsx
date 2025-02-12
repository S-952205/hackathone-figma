'use client'
import Link from "next/link";
import React, { useState } from "react";
import Searchicon from "../searchicon";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      className="w-[577px] h-[48px]  text-white/40  bg-[#F0F0F0]
    rounded-[62px] hidden px-[16px] py-[12px] lg:flex items-center"
    >
      <div className="w-[24px] h-[24px] flex items-center justify-center mr-[12px]">
        <Link href={""}>
          <Searchicon />
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search for products..."
        className=" bg-[#F0F0F0] hidden lg:block  outline-none text-[#909090]
        h-[24px] text-[16px] font-Satoshi font-[400px]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
