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
  if (result.length >= 1) {
    return (
      <>
        {result.map((result: any, index: any) => (
          <div key={index} className="border px-10 p-10 w-full h-full ">
            <div className="">
              <Image
                src={
                  result._links.thumbnail ? result._links.thumbnail.href : ""
                }
                width={500}
                height={100}
                className="w-full h-48 object-cover"
                alt="interpol logo"
              />
               <div className="mt-4">
              <h1 className="">Name: <span className="lg:text-sm md:text-xs font-bold">{result.name}</span></h1>
            </div>
            </div>

           
            <hr />
            <div className=" flex content-end   justify-between mt-20">
              <Image
                src={InterpolLogo}
                alt="Interpol logo"
                width={40}
                height={40}
              />
              <button className="bg-blue-800 px-10 text-white hover:bg-blue-700 rounded-full">
                Details
              </button>
            </div>
          </div>
       
        ))}
        <Pagination
            total={total}
            currentPage={currentPage}
            pageSize={pageSize}
            category="interpol"
        />
      </>
    );
  } else {
    return (
      <>
        <div className="grid grid-cols-1 px-10 py-10 w-full border  ">
          <Image
            alt="interpol logo"
            className="p-3"
            width={200}
            height={200}
            src={InterpolLogo}
          />
          <hr />
          <h1 className="h1">No Records found</h1>
        </div>
      </>
    );
  }
};

export default Interpol;
