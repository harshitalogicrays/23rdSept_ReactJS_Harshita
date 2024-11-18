import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('product/fetchProducts',
    async(_,thunkAPI)=>{
        try{ let res  = await fetch("https://67331a7f2a1b1a4ae1120b27.mockapi.io/products",{method:"GET"})
            let data  = await res.json()
            return data   }
          catch(err){    return thunkAPI.rejectWithValue(err.message) }
})

const productSlice = createSlice({
    name:'product',
    initialState:{products:[],loading:false,error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{state.loading=true;})
        .addCase(fetchProducts.fulfilled,(state,action)=>{state.loading=false;
            console.log(action)
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false;state.error=action.payload
        })
    }
})

export default productSlice
export const selectProducts = (state)=>state.product.products