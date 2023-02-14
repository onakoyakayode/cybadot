import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../src/features/user/userSlice'


export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
})