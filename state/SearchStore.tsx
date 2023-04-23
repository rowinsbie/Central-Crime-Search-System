import { create } from 'zustand'
import axios from "axios";



interface IInterpol  {
    
        results: Array<Object>,
        query:String,
        totalResult:number,
}

interface Search extends IInterpol {
    setResult:(keyword:String,e:any) => void 

}

const useSearchStore = create<Search>()((set) => ({
    
    // Interpol data
    results:[],
    totalResult:0,
    query:"",
       
 
    setResult: async(keyword: String,e:any) => {
        e.preventDefault();
        let interpol = InterpolSearch(keyword);
        set({results:(await interpol).results});
        set({query:keyword});
        set({totalResult:(await interpol).totalResult});

        let fbi = FBISearch(keyword);

    }
    
}));

const InterpolSearch = async(keyword:String) => {
    const res = await axios.get(`https://ws-public.interpol.int/notices/v1/red?name=${keyword}`)
    const data = await res.data;
    return {
        results:data._embedded.notices,
        totalResult:data.total
    }
}

const FBISearch = async(keyword:String) => {
    const res = await axios.get(`https://api.fbi.gov/@wanted?pageSize=20&page=1&sort_on=modified&sort_order=desc&title=${keyword}`);
    const data = await res.data;
    console.log(data);
    return data;
}

export default useSearchStore;