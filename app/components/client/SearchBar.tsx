"use client";
import useSearchStore from "@/state/SearchStore";
import { useState } from "react";
import MatrixResult from "./result/MatrixResult";
import useFilterStore from "@/state/FilterStore";

import LoadingScreen from "./LoadingScreen";
import Interpol from "./result/InterpolResult";
import FBIResult from "./result/FBIResult";
const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const setResult = useSearchStore((state) => state.setResult);
  const showInterpol = useFilterStore((state) => state.showInterpol);
  const showFBI = useFilterStore((state) => state.showFBI);

  const isLoading = useSearchStore((state) => state.isLoading);

  const onChange = (e: any) => {
    setKeyword(e.target.value);
  };
  if (!isLoading) {
    return (
      <>
        <form>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={onChange}
              value={keyword}
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50   dark:placeholder-gray-400 "
              placeholder="Search by name"
              required
            />
            <button
              onClick={(e) => setResult(keyword, e)}
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <MatrixResult />
            {showInterpol ? <Interpol /> : ""}
            {showFBI ? <FBIResult /> : ""}
      </>
    );
  } else {
    return (
      <div className="container mx-auto  sm:px-3 sm:py-3">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 sm:grid-cols-1">
          <LoadingScreen />
        </div>
      </div>
    );
  }
};

export default SearchBar;
