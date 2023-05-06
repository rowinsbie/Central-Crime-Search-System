import searchDefault from "../../images/search-default.png";
import Image from "next/image";
const DefaultMessage = () => {
   return (
    <div
          
    className="xl:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md pt-40 container my-12 mx-auto px-4 md:px-4"
  >
        <div className="flex justify-center">
        <Image
            alt="search "
            className="p-3 justify-center"
            width={350}
            height={350}
            src={searchDefault}
          />
        </div>
        <div className="text-center">
            <span className=" text-3xl font-bold">Central Criminal Search System</span>
            <p>Right now, this system only connects to the public API of the Interpol and FBI, I initially planned it to connect also to the NBI and PNP, but unfortunately, there is no available public API.</p>
        </div>
    </div>
   )
}

export default DefaultMessage;