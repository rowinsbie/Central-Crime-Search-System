import { create } from 'zustand'

interface IFilter {
    showInterpol:Boolean,
    showFBI:Boolean
}

interface IFilterResult extends IFilter {
    updateFilter:(agency:String,e:any) => void
}


const useFilterStore = create<IFilterResult>()((set,state) => ({
    showInterpol:true,
    showFBI:false,
    updateFilter: (agency:String,e:any) => {
        e.preventDefault();
        switch(agency) {
            case 'Interpol':
                set({showInterpol:true})    
                set({showFBI:false});
                break;
            case 'FBI':
                set({showFBI:true})    
                set({showInterpol:false})    
        }
    }
}));


export default useFilterStore;