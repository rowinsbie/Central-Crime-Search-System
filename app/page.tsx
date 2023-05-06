import Image from "next/image";
import SearchBar from "./components/client/SearchBar";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="border-gray-200  px-5  py-19 pb-10  overflow-hidden">
      <div className="xl:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md    mx-auto p-4">
      <div className="bg-white	">

          {/* `<SearchBar />` is rendering the `SearchBar` component, which is a custom component that displays a
search bar form. */}
          <Suspense fallback={<Loading />}>
            <SearchBar />
          </Suspense>
        </div>
      </div>
      <hr className="" />
    </main>
  );
}
