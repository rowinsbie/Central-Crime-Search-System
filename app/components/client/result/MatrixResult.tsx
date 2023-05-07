"use client";
import useInterpolStore from "@/state/SearchStore";
import useFilterStore from "@/state/FilterStore";
const MatrixResult = () => {
  const total = useInterpolStore((state) => state.totalResult);
  const fbiTotal = useInterpolStore((state) => state.totalFBI);

  const query = useInterpolStore((state) => state.query);
  const updateFilter = useFilterStore((state) => state.updateFilter);

  return (
    <div className="xl:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md md:py-5  py-2 text-white bg-slate-600 px-10 mx-auto ">
      <div className="flex flex-cols justify-between text-sm md:text-lg">
        {/* <div className="">
          <span>Keyword: </span>
          <b className="text-red-500">{query}</b>
        </div> */}
        <div>
          <span>Interpol: </span>
          <span
            onClick={(e) => updateFilter("Interpol", e)}
            className="cursor-pointer	hover:bg-green-400	 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full"
          >
            {total}
          </span>
        </div>
        <div>
          <span>FBI: </span>
          <span
            onClick={(e) => updateFilter("FBI", e)}
            className="cursor-pointer	hover:bg-green-400 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full"
          >
            {fbiTotal}
          </span>
        </div>
        <div>
          <span>NBI: </span>
          <span className="cursor-pointer	hover:bg-green-400 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">
            0
          </span>
        </div>
        <div>
          <span>PNP: </span>
          <span className="cursor-pointer	hover:bg-green-400 inline-flex items-center  justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default MatrixResult;
