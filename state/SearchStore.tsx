import { create } from 'zustand'
import axios from "axios";



interface IInterpol  {
    
        results: Array<Object>,
        query:String,
        totalResult:number,
        InterpolCurrentPage:number
}

interface IFBI {
    FbiResults: Array<Object>,
    totalFBI:number,
    FBICurrentPage:number
}

interface Search extends IInterpol, IFBI {
    setResult:(keyword:String,e:any) => void 

}

const useSearchStore = create<Search>()((set) => ({
    
    // Interpol data
    results:[],
    totalResult:0,
    query:"",
    InterpolCurrentPage:1,

    // fbi results
    FbiResults:[],
    totalFBI:0,
    FBICurrentPage:1,
 
    setResult: async(keyword: String,e:any) => {
        e.preventDefault();
        let interpol = InterpolSearch(keyword);
        set({results:(await interpol).results});
        set({query:keyword});
        set({totalResult:(await interpol).totalResult});
        let fbi = await FBISearch(keyword);
        console.log(fbi);
        set({FbiResults:fbi.items})
        set({totalFBI:fbi.total})

    }
    
}));

const InterpolSearch = async(keyword:String) => {
    const res = await axios.get(`https://ws-public.interpol.int/notices/v1/red?name=${keyword}`)
    const data = await res.data;
    console.log(data);  
    return {
        results:data._embedded.notices,
        totalResult:data.total,
        currentPage:data.query.page
    }
}

const FBISearch = async(keyword:String) => {
    const res = await axios.get(`https://api.fbi.gov/@wanted?title=${keyword}`);
    const data = await res.data;
    return await data;
}

export default useSearchStore;