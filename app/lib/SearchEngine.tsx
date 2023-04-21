import axios from "axios";
import { useState } from "react";


const  Search = async(keyword:String,e:any) => {
    e.preventDefault();
    // const res = await fetch(`https://ws-public.interpol.int/notices/v1/red?forename=${keyword}`);
    const res = await axios.get(`https://ws-public.interpol.int/notices/v1/red?forename=${keyword}`)
  

    return  res.data._embedded.notices;

}

export default Search;