"use client";
import useSearchStore from "@/state/SearchStore";
interface IPagination {
  itemLength: number,
  pageSize: number,
  currentPage: number,
}

const Pagination = ({ itemLength, pageSize, currentPage }: IPagination) => {
  const pageCount = Math.ceil(itemLength / pageSize);
  return (
    <nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px">
    <li>
      <a href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{pageCount}</a>
    </li>
   
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

  )
}

export default Pagination