import { createSlice } from "@reduxjs/toolkit";


const initialState = {
        username:"abc",
        email:"hello@meetello.live",
        lat:null,
        long:null,
}


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {    
        updateLocation: (state,action)=>{
            state.lat = action.payload.lat
            state.long = action.payload.long
        }
    }
})

export const {updateLocation} = usersSlice.actions;
export default usersSlice.reducer;