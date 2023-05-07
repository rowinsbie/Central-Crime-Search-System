"use client";
import useSearchStore from "@/state/SearchStore";
import Image from "next/image";
import Link from "next/link";
import FBILogo from "../../../images/fbi.png";
import Pagination from "../Pagination";

const FBIResult = () => {
  const fbi = useSearchStore((state) => state.FbiResults);
  const total = useSearchStore((state) => state.totalFBI);
  const currentPage = useSearchStore((state) => state.FBICurrentPage);
  const pageSize = 10;
  if (fbi.length >= 1) {
    return (
      <>
        <div
          
          className="xl:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md container my-12 mx-auto px-1 md:px-1"
        >
          <h1 className=" text-4xl font-bold ">FBI</h1>
          <p>Below are the people wanted by the FBI</p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <div className="flex  flex-wrap  items-stretch -mx-1 lg:-mx-4">
          {fbi.map((fbi: any, index: number) => (
            <div
              key={index}
              className="my-1 px-1  w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  h-full"
            >
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <Image
                    alt="Placeholder"
                    className="block object-fit w-full   max-h-48 "
                    src={fbi.images[0] ? fbi.images[0].thumb : ""}
                    width={1000}
                    height={1000}
                  />
                </a>

                <header className="items-center justify-between leading-tight p-2 md:p-4 ">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black  text-md font-bold "
                      href="#"
                    >
                      {fbi.title}
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm"></p>
                  <p className=" font-bold mt-3">Description</p>
                  <div className=" overflow-hidden whitespace-nowrap text-ellipsis">
                    <p>
                      {fbi.description == null
                        ? "No description"
                        : fbi.description}
                    </p>
                    {/* <button className=" text-white px-7 rounded-full py-2 hover:bg-gray-900 bg-blue-700 mt-3">
    Read More
  </button> */}
                  </div>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <Image
            alt="FBI logo"
            className="p-3"
            width={100}
            height={100}
            src={FBILogo}
          />
                  <Link
                    target="__blank"
                    href={`${fbi.id}`}
                    className=" text-white px-7 rounded-full py-2 hover:bg-gray-900 bg-blue-900  mt-3"
                  >
                    View details  
                  </Link>
                </footer>
              </article>
            </div>
          ))}
        </div>
        <Pagination
            total={total}
            currentPage={currentPage}
            pageSize={pageSize}
            category="FBI"
          />
        </div>
      </>
    );
  } else {
    return (
      <div
      className="xl:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md container my-12  mt-44 mx-auto text-center px-4 md:px-4"
    >
      <div className="flex justify-center">
      <Image
            alt="interpol logo"
            className="p-3"
            width={200}
            height={200}
            src={FBILogo}
          />
      </div>
      <p className="font-bold  text-2xl text-slate-700 ">No result from the FBI</p>

      </div>
    );
  }
};
export default FBIResult;
