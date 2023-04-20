"use client";
import Search from "@/app/lib/SearchEngine";
const SearchBar = () => {
    return (
      <form action="" className="flex py-3">
        <input type="text" className="bg-gray-50 rounded-s-2xl  text-gray-900 text-sm   block w-full p-2.5   " placeholder="Enter the name of the person you want to check" />
        <button onClick={Search}  className="bg-emerald-700 text-sm hover:bg-green-700 xs:w-1.5	 sm:bg-red-500		px-10 text-white rounded-r-lg">Search</button>
      </form>
    );
}

export default SearchBar;