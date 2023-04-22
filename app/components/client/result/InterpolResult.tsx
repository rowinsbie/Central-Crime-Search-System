"use client";
import useSearchStore from "@/state/SearchStore";
import Image from "next/image";
import Link from "next/link";
const Interpol = () => {
    const result = useSearchStore((state) => state.results);
    if(result.length >= 1) {
        return (
            <>
                {result.map((result: any,index:any) => (
                    <div key={index}  className="flex w-1/3  flex-wrap mt-0 p-10">
                <div className="w-full p-1 md:p-2">
                    <Image
                    src={result._links.thumbnail ? result._links.thumbnail.href : ""}
                    width={500}
                    height={100}
                    className="block h-full w-full rounded-lg object-cover object-center"
                    alt="interpol logo"
                    />
                    <div className="p-3 mb-20">
                    <h1 className="h1">Name: {result.name}</h1>
                    <h6>Foreign Name: {result.forename}</h6>
                    <Link className="bg-red-600 p-2 px-10 text-white rounded-full" href={"/test"}>Details    </Link>
                    </div>
                </div>
                </div>
                ))}
            </>
        )
    } else {
        return (
            <>
                <h1>Nothing found in Interpol.</h1>
            </>
        )
    }    
}

export default Interpol;