"use client";
import useSearchStore from "@/state/SearchStore";
import { useState } from "react";
import MatrixResult from "./result/MatrixResult";
import useFilterStore from "@/state/FilterStore";
import AgencyLogos from "../client/AgencyLogo";

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
  return (
    <>
      <div className="fixed mx-auto right-0 top-0 left-0  px-20  bg-slate-900 ">
        <div className="py-5">
          <AgencyLogos />
        </div>

        <form className="relative ">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={onChange}
              value={keyword}
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-s-sm bg-gray-50   dark:placeholder-gray-400 "
              placeholder="Search by name"
              required
            />
            <button
              onClick={(e) => setResult(keyword, e)}
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-slate-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
        <MatrixResult />
      </div>

      <div className="py-20">
          {/* {(isLoading) ? <LoadingScreen /> : (() => {
              {showInterpol ? <Interpol /> : ""}
              {showFBI ? <FBIResult /> : ""}
          }) (
          )} */}
          {isLoading ? (
            <LoadingScreen />
          ) : (
             (showInterpol ? <Interpol /> : null)
            //  (showFBI ? <FBIResult /> : null)
          )}
      </div>

    </>
  );
};

export default SearchBar;
