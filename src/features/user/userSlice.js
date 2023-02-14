import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../components/actions/usersAction";





const initialState = {
    users: [],
    usersContainer: [],
    isLoading: false,
    errors: {},
    user: {}
}



export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        filteredUser: (state, action) => {
            state.users = state.users.filter(user => user.job.toLowerCase().includes(action.payload))
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.users = state.users.filter((item) => item.id !== itemId)
        },
        filteredAge: (state, { payload }) => {
            const userAge = state.users.filter(user => user.age >= 22 && user.age <= 25);
            const selectedUsers = userAge.slice(0, 2);
            state.users = (selectedUsers);
            
        },
        filteredBackendDeveloper: ( state, action) => {
            state.users = state.users.filter(user => user.job === "Backend Developer" && action.payload);
        }
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.isLoading = false;
            state.errors = action.payload
        }
    }
})


export const { filteredUser, addUser, removeItem, filteredAge, filteredBackendDeveloper } = userSlice.actions;


export default userSlice.reducer;