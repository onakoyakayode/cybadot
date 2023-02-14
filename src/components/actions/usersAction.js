import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersData } from "../User/UserData";



export const getUsers = createAsyncThunk('users', async () => {
    //user/pending
    //user/fulfilled
    //user/rejected
    return UsersData;

});
