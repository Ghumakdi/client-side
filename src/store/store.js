import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import usersReducer from "./usersSlice";

const store = configureStore({
      reducer:{
            users: usersReducer,
            categories: categoriesReducer

      }
});


export default store;