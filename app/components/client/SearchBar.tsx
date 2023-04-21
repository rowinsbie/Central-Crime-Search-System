"use client";
import useSearchStore from "@/state/Search";
import { useState } from "react";
import MatrixResult from "./result/MatrixResult";
import Image from "next/image";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const result = useSearchStore((state) => state.results);
  const setResult = useSearchStore((state) => state.setResult);

  const onChange = (e: any) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form action="" className="flex py-3">
        <input
          type="text"
          onChange={onChange}
          value={keyword}
          className="bg-gray-50 rounded-s-2xl  text-gray-900 text-sm   block w-full p-2.5   "
          placeholder="Enter the name of the person you want to check"
        />
        <button
          onClick={(e) => setResult(keyword, e)}
          className="bg-emerald-700 text-sm hover:bg-green-700 xs:w-1.5	 sm:bg-red-500		px-10 text-white rounded-r-lg"
        >
          Search
        </button>
      </form>
      <MatrixResult />
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
       
            {result.map((result: Array<Object>) => (
                 <div key={result.date_of_birth}  className="flex w-1/3  flex-wrap p-10">
              <div className="w-full p-1 md:p-2">
                <Image
                  src={result._links.thumbnail ? result._links.thumbnail.href : ""}
                  width={300}
                  height={100}
                  className="block h-full w-full rounded-lg object-cover object-center"
                  alt="interpol logo"
                />
                <h3>Name: {result.name}</h3>
                <h3>Foreign Name: {result.forename}</h3>
              </div>
              </div>
            ))}
         
        </div>
      </div>
    </>
  );
};

export default SearchBar;
