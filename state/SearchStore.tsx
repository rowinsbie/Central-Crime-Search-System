import { create } from 'zustand'
import axios from "axios";



interface IInterpol  {
    
        results: Array<Object>,
        totalResult:number,
        InterpolCurrentPage:number
}

interface IFBI {
    FbiResults: Array<Object>,
    totalFBI:number,
    FBICurrentPage:number
}

interface Search extends IInterpol, IFBI {
    query:String,
    setResult:(keyword:String,e:any) => void ,
    changePage : (page:number,category:String) => void
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
        let state = useSearchStore.getState();
        let interpol = InterpolSearch(keyword,state.InterpolCurrentPage);
        set({results:(await interpol).results});
        set({query:keyword});
        set({totalResult:(await interpol).totalResult});

        let fbi = await FBISearch(keyword,state.FBICurrentPage);
        set({FbiResults:fbi.items})
        set({totalFBI:fbi.total})
    },
   
    changePage : async(page:number,category:String) => {
        let query =  useSearchStore.getState().query;
        switch(category) {
            case 'interpol':
                let interpol = useSearchStore.getState().InterpolCurrentPage;
                let newPage = interpol;
                if(interpol < page) {
                    newPage++;
                } else {
                    newPage--;
                }
                let newResult = InterpolSearch(query,newPage);
                set({InterpolCurrentPage:newPage});
                set({results:(await newResult).results});
                set({totalResult:(await newResult).totalResult});

        }

    }

    
}));

const InterpolSearch = async(keyword:String,currentPage:number) => {
    // const res = await axios.get(`https://ws-public.interpol.int/notices/v1/red?name=${keyword}`)
    const res = await axios.get(`https://ws-public.interpol.int/notices/v1/red?name=${keyword}&page=${currentPage}&resultPerPage=10`)
    const data = await res.data;
    console.log(data);  
    return {
        results:data._embedded.notices,
        totalResult:data.total,
        currentPage:data.query.page
    }
}

const FBISearch = async(keyword:String,currentPage:number) => {
    const res = await axios.get(`https://api.fbi.gov/@wanted?pageSize=10&page=${currentPage}&title=${keyword}`);
    const data = await res.data;
    return await data;
}

export default useSearchStore;