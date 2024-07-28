

import { createSlice } from '@reduxjs/toolkit';
// import SignIn from '../../pages/SignIn';

const initialState = {
    currentUser: null,
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       signInStart:(state)=>{
        state.loading=true;
       },
       signInSuccess:(state,action)=>{
        state.loading=false;
        state.currentUser=action.payload;
       },
       signInFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
       },
    },
});
export const {signInStart,signInSuccess,signInFailure}=userSlice.actions;
export default userSlice.reducer;