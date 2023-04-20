import Image from 'next/image'
import { Inter } from 'next/font/google'
import SearchBar from './components/client/SearchBar'
import AgencyLogos from './components/client/AgencyLogo'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className="mx-auto container-fluid">
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
        <SearchBar />
      </div>
    </div>
    <hr className="" />
  </main>
  )
}
