import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:"filter",
    initialState:{filterProducts:[],searchval:'',catval:'',priceval:''},
    reducers:{
        filter_by_search(state,action){
           let {products,search} =action.payload
           if(search !=''){
            const filters = products.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
            state.filterProducts = filters
           }
           state.searchval = search
        },
        filter_by_sort(state,action){
            let {products,price} =action.payload
            if(price !=''){
               const sortedProducts =  products.sort((a,b)=>price=="htol"? b-a : a-b)
                state.filterProducts = sortedProducts
            }
            state.priceval = price
        },
        filter_by_category(state,action){
            let {products,cat} =action.payload
            if(cat != ''){
            const filters = products.filter(item=>item.category==cat)
            state.filterProducts = filters
            }
            state.catval = cat
        }
    }
})
export const {filter_by_category,filter_by_search,filter_by_sort} = filterSlice.actions
export default filterSlice
export const selectFilters = (state)=>state.filter.filterProducts
export const selectSearch =(state)=>state.filter.searchval
export const selectCategory =(state)=>state.filter.catval
export const selectPrice =(state)=>state.filter.priceval

