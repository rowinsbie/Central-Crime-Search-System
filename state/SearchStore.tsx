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
    isLoading:Boolean
    query:String,
    setResult:(keyword:String,e:any) => void ,
    changePage : (page:number,category:String) => void
}

const useSearchStore = create<Search>()((set) => ({
    
    isLoading:false,
    
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
        set({isLoading:true});
        let state = useSearchStore.getState();
        let interpol = await InterpolSearch(keyword,state.InterpolCurrentPage);
        set({results:(await interpol).results});
        set({query:keyword});
        set({totalResult:(await interpol).totalResult});
        set({InterpolCurrentPage:1});

        let fbi = await FBISearch(keyword,state.FBICurrentPage);
        set({FbiResults:fbi.items})
        set({totalFBI:fbi.total})

        if(interpol && fbi) {
            set({isLoading:false});

        }
    },
   
    changePage : async(page:number,category:String) => {
        set({isLoading:true});
        let query =  useSearchStore.getState().query;
        switch(category) {
            case 'interpol':
                let interpol = useSearchStore.getState().InterpolCurrentPage;
                let newPage = interpol;
                if(interpol < page) {
                    newPage = page;
                } else {
                    newPage = page;
                }
                let newResult = InterpolSearch(query,newPage);
                set({InterpolCurrentPage:newPage});
                set({results:(await newResult).results});
                set({totalResult:(await newResult).totalResult});
                break;

        }
        set({isLoading:false});

    }

    
}));

const InterpolSearch = async(keyword:String,currentPage:number) => {
    // const res = await axios.get(`https://ws-public.interpol.int/notices/v1/red?name=${keyword}`)
    const res = await axios.get(`https://ws-public.interpol.int/notices/v1/red?name=${keyword}&page=${currentPage}&resultPerPage=8`)
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