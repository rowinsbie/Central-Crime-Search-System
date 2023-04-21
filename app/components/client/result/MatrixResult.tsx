"use client";
import useSearchStore from "@/state/Search";

const MatrixResult = () => {
    const total = useSearchStore((state) => state.totalResult);
    const query = useSearchStore((state) => state.query);
    return (
        <>
            <div className="flex justify-between border px-5 py-5 bg-slate-200		 mb-10 rounded-full ">
                <div className="flex justify-center">
                    <span>Keyword: </span>
                    <b className="text-red-500">{query}</b>
                </div>
                <div>
                    <span>Interpol: </span>
                    <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{total}</span>

                </div>
                <div>
                    <span>FBI: </span>
                    <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">0</span>

                </div>
                <div>
                    <span>NBI: </span>
                    <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">0</span>

                </div>
                <div>
                    <span>PNP: </span>
                    <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">0</span>

                </div>
            </div>
        </>
    )
}

export default MatrixResult;