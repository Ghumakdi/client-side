import { createSlice } from "@reduxjs/toolkit";



const categoriesSlice = createSlice({
name: "categories",
initialState:[],
reducers: {
    addCategory: (state,action)=>{
        if(!state.includes(action.payload)){
            state.push(action.payload)
        }
    },
    removeCategory: (state,action)=>{
        return state.filter(category=>category!==action.payload)
    }
}
})

export const {addCategory,removeCategory} = categoriesSlice.actions;

export default categoriesSlice.reducer;