"use client";
import useSearchStore from "@/state/SearchStore";
interface IPagination {
  total: number,
  pageSize: number,
  currentPage: number,
  category:String
}

const Pagination = ({ total, pageSize, currentPage,category }: IPagination) => {
  const pageCount = Math.ceil(total / pageSize);
  const changePage = useSearchStore((state) => state.changePage);
  const pageNumber = useSearchStore.getState().InterpolCurrentPage;
  return (
    <nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px">
    <li>
      <a href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
     {Array.from(Array(pageCount), (e:number, i:number) => {
        return (
          <li key={i}>
      <a href="#" onClick={() => changePage(i+1,category)} className={"px-3 "+ (i+1 == pageNumber ? 'bg-red-500':'dark:bg-gray-800') +" disabled py-2 leading-tight text-gray-500  border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>{i+1}</a>
    </li>
        )
     })}
    <li>
      <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

  )
}

export default Pagination