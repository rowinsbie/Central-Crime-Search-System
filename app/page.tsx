import Image from 'next/image'
import SearchBar from './components/client/SearchBar'
import AgencyLogos from './components/client/AgencyLogo'
import { Suspense } from 'react'
import Loading from './loading'

export default function Home() {
  return (
    <main className="relative container p-6 mx-auto container">
    <div className="bg-white	">
      {/* `<AgencyLogos />` is rendering the `AgencyLogos` component, which is a custom component that
displays logos of different law enforcement agencies. */}
      <div className="px-20 py-10 ">
          <AgencyLogos />
      </div>

      <div className="px-10 pt-1 pb-10">
        {/* `<SearchBar />` is rendering the `SearchBar` component, which is a custom component that displays a
search bar form. */}
        <h2>Crime Check PH</h2>
        <hr />
        <Suspense fallback={<Loading />}>
        <SearchBar />
        </Suspense>

      </div>
    </div>
    <hr className="" />
  </main>
  )
}
