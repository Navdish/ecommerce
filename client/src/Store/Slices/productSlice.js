import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

//Action
export const fetchProducts = createAsyncThunk("fetchProducts", async() => {
    // console.log("...");
    const response = await axios.get('http://localhost:8080/fetch_products');
    console.log(response);
    return response.data;
})

export const addProduct = createAsyncThunk("addProduct", async(data) => {
    console.log('...........', data);
    await axios.post('http://localhost:8080/add_product', data);
})

const productSlice = createSlice({
    name : "product",
    initialState : {
        isLoading : false,
        data : [],
        isError : false
    },
    // reducers : {
    //     addProduct(state, action){
            
    //     },
    //     removeProduct(state, action){

    //     }
    // },
    extraReducers : (builder) =>  {
        builder.addCase(fetchProducts.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.data = action.payload;
            console.log('action',action.payload);
            console.log(state);
        });
        builder.addCase(fetchProducts.pending, (state, action)=> {
            state.isLoading = true;
        });
        builder.addCase(addProduct.fulfilled, (state, action)=> {
            state.push(action.payload);
        });
    }

})

export default productSlice.reducer;