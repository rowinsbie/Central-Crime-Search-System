"use client";
import useInterpolStore from "@/state/SearchStore";
import useFilterStore from "@/state/FilterStore";
const MatrixResult = () => {
    const total = useInterpolStore((state) => state.totalResult);
    const fbiTotal = useInterpolStore((state) => state.totalFBI);

    const query = useInterpolStore((state) => state.query);
    const updateFilter = useFilterStore((state) => state.updateFilter);

    return (
        <>
            <div className="grid lg:grid-cols-5  px-5  bg-gray-600 py-3	text-white	 mb-10  ">
                <div className="flex lg:justify-center sm:justify-start">
                    <span>Keyword: </span>
                    <b className="text-red-500">{query}</b>
                </div>
                <div>
                    <span>Interpol: </span>
                    <span onClick={(e) => updateFilter("Interpol",e)} className="cursor-pointer	hover:bg-green-400	 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{total}</span>

                </div>
                <div>
                    <span>FBI: </span>
                    <span onClick={(e) => updateFilter("FBI",e)} className="cursor-pointer	hover:bg-green-400 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">{fbiTotal}</span>

                </div>
                <div>
                    <span>NBI: </span>
                    <span className="cursor-pointer	hover:bg-green-400 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">0</span>

                </div>
                <div>
                    <span>PNP: </span>
                    <span className="cursor-pointer	hover:bg-green-400 inline-flex items-center  justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">0</span>

                </div>
            </div>
        </>
    )
}

export default MatrixResult;