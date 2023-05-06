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
  let pageNumber = useSearchStore.getState().InterpolCurrentPage;
  if(category == "FBI") {
    pageNumber = useSearchStore.getState().FBICurrentPage;
  }
  if(total >= 1) {
      return (
      <ul className="inline-flex -space-x-px  w-80">
        <li className="bg-blue-500">
          <a href="#" onClick={() => changePage(currentPage-1,category)} className={(pageNumber == 1 ? ' pointer-events-none ':'') + "px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>Previous</a>
        </li>
        {Array.from(Array(pageCount), (e:number, i:number) => {
            return (
              <li key={i}>
          <a href="#" onClick={() => changePage(i+1,category)} className={"px-3 "+ (i+1 == pageNumber ? 'bg-blue-700 text-white pointer-events-none':'bg-white') +" py-2   border  hover:bg-gray-100 hover:text-blue-200  dark:hover:text-white"}>{i+1}</a>
        </li>
            )
        })}
        <li>
          <a href="#" onClick={() => changePage(currentPage+1,category)} className={(pageNumber >= pageCount ? ' pointer-events-none ':'') + "px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>Next</a>
        </li>
      </ul>

      )
  } else {
    return (
      <></>
    )
  }
}

export default Pagination