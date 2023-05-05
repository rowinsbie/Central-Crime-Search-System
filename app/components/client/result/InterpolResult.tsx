"use client";
import useSearchStore from "@/state/SearchStore";
import Image from "next/image";
import Link from "next/link";
import InterpolLogo from "../../../images/interpol.png";
import Pagination from "../Pagination";
const Interpol = () => {
  const result = useSearchStore((state) => state.results);
  const total = useSearchStore((state) => state.totalResult);
  const currentPage = useSearchStore((state) => state.InterpolCurrentPage);
  const pageSize = 10;
  if (total >= 1) {
    return (
      <>
        <div
          id="projects"
          className="xl:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md container my-12 mx-auto px-4 md:px-4"
        >
          <h1 className=" text-4xl font-bold">Interpol</h1>
          <p>Below are the people with red notice</p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <div className="flex  flex-wrap  items-stretch -mx-1 lg:-mx-4">
            {result.map((key: any, index: number) => {
              return (
                <div
                  key={index}
                  className="my-1 px-1  w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  h-full"
                >
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <Image
                        alt="Placeholder"
                        className="block object-fit w-full   max-h-48 "
                        src={
                          key._links.thumbnail ? key._links.thumbnail.href : ""
                        }
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
                          {key.name}
                        </a>
                      </h1>
                      <p className="text-grey-darker text-sm"></p>
                      <p className=" font-bold mt-3">Description</p>
                      <div className=" overflow-hidden whitespace-nowrap text-ellipsis">
                        <p>
                          {key.description == null
                            ? "No description"
                            : key.description}
                        </p>
                        {/* <button className=" text-white px-7 rounded-full py-2 hover:bg-gray-900 bg-blue-700 mt-3">
                      Read More
                    </button> */}
                      </div>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <Link
                        target="__blank"
                        href={`${key.id}`}
                        className=" text-white px-7 rounded-full py-2 hover:bg-gray-900 bg-gray-950 mt-3"
                      >
                        View details
                      </Link>
                    </footer>
                  </article>
                </div>
              );
            })}
          </div>
          <Pagination
          total={total}
          currentPage={currentPage}
          pageSize={pageSize}
          category="interpol"
        />
        </div>

       
      </>
    );
  } else {
    return (
      <div
      id="projects"
      className="xl:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md container my-12  mt-44 mx-auto text-center px-4 md:px-4"
    >
      <div className="flex justify-center">
      <Image
            alt="interpol logo"
            className="p-3"
            width={200}
            height={200}
            src={InterpolLogo}
          />
      </div>
      <p>No result from the Interpol</p>

      </div>

        // <div className="grid grid-cols-1 px-10 py-10 w-full border  ">
        //   <Image
        //     alt="interpol logo"
        //     className="p-3"
        //     width={200}
        //     height={200}
        //     src={InterpolLogo}
        //   />
        //   <hr />
        //   <h1 className="h1">No Records found</h1>
        // </div>
    
    );
  }
};

export default Interpol;
