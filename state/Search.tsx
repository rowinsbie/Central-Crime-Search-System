import { create } from 'zustand'
import axios from "axios";

interface SearchState {
    results: any,
    query:String,
    totalResult:any,
    setResult: (data: any,e:any) => void
}

const useSearchStore = create<SearchState>()((set) => ({
    results:[],
    query:'',
    totalResult:0,
    setResult: async(keyword: String,e:any) => {
        e.preventDefault();
        const res = await axios.get(`https://ws-public.interpol.int/notices/v1/red?name=${keyword}`)
        const data = await res.data;
        set({results:data._embedded.notices});
        set({query:keyword});
        set({totalResult:data.total})
       console.log(data);
    }
}));

export default useSearchStore;