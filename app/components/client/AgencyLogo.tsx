`use client`;
/* 
Component: LoginForm
Developed By: Seiki Rowins Bie
Description: This component will render the logo of all the agency
*/

import Image from "next/image";
import agency from "../../images/agency.png";

const AgencyLogos = () =>{

    return (
         <div id="agency" className="flex flex-wrap justify-center">
          <Image src={agency} className="h-100 w-100 mt-5"   alt="interpol logo" />
      </div>
    )
}

export default AgencyLogos;