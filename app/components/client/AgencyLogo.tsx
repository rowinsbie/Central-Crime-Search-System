`use client`;
/* 
Component: LoginForm
Developed By: Seiki Rowins Bie
Description: This component will render the logo of all the agency
*/

import Image from "next/image";
import interpol from "../../images/interpol.png";
import fbi from "../../images/fbi.png";
import pnp from "../../images/pnp.png";
import nbi from "../../images/nbi.png";

const AgencyLogos = () =>{

    return (
         <div id="agency" className="flex flex-wrap justify-center">
          <Image src={interpol} className="h-20 w-20"   alt="interpol logo" />
          <Image src={fbi} className=" h-20 w-20"  alt="interpol logo" />
          <Image src={pnp}  className=" h-20 w-20" alt="interpol logo" />
          <Image src={nbi}  className=" h-20 w-20" alt="interpol logo" />

      </div>
    )
}

export default AgencyLogos;