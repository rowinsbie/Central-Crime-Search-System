"use client";
import useSearchStore from "@/state/SearchStore";
import Image from "next/image";
import Link from "next/link";
import FBILogo from "../../../images/fbi.png";

const FBIResult = () => {
  const fbi = useSearchStore((state) => state.FbiResults);
  if (fbi.length >= 1) {
    return (
      <>
        {fbi.map((fbi: any, index: number) => (
          <div key={index} className="border px-10 p-10 w-full  ">
            <div className="">
              <Image
                src={fbi.images[0] ? fbi.images[0].thumb : ""}
                width={500}
                height={100}
                className="w-full h-48 object-cover"
                alt="FBI SUSPECT"
              />
              <div className="mt-4">
                <h1 className="">
                  Name:{" "}
                  <span className="lg:text-sm md:text-xs font-bold">
                    {fbi.title}
                  </span>
                </h1>
              </div>
            </div>
              
            <hr />
            <div className="action flex justify-between mt-10">
              <Image
                src={FBILogo}
                alt="FBI logo"
                width={40}
                height={40}
              />
              <button className="bg-blue-800 px-10 text-white hover:bg-blue-700 rounded-full">
                Details
              </button>
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return (
        <>
        <h1>NO FBI RESULT</h1>
        </>
    )
  }
};
export default FBIResult;