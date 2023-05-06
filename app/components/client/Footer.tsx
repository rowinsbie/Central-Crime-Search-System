import Image from "next/image";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";

import Link from "next/link";
Link
const Footer = () => {
  return (
    <div className="xl:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md container my-4 mx-auto px-4 md:px-4">
      <div className="flex flex-col sm:flex-row  justify-between">
        <div>
          <h1 className=" text-xl md:text-2xl font-bold mb-2">Central Criminal Search System</h1>
          <p className="text-sm md:text-md">Designed & Developed by  
          <Link href="https://seikirowinsbie.com" className=" text-blue-700 font-bold"> Seiki Rowins Bie</Link>
          </p>
        </div>
        <div className="flex justify-center">
            <Link target="__blank" href="https://github.com/rowinsbie/Central-Crime-Search-System">
                <Image alt="Github Logo" width={50} height={50} src={Github} />
            </Link>
            <Link target="__blank" href="https://www.linkedin.com/in/seikirowinsbie/">
                <Image alt="LinkedIn Logo" width={45} height={45} src={Linkedin} />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
