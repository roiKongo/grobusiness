import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    error: null,
    status: 'idle'  //(pending,complete,failed,idle) login status
}

const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {
        loginUser (state,action){

           

            state.status = 'pending'
        },
        loginUserSuccess(state,action){
            state.user = action.payload;
            state.error = null;
            state.status = 'complete';
        },
        loginUserFailure(state,action)
        {
            state.user = null;
            state.error = action.payload;
            state.status = 'failed';

        }

    }
});

export const {
    loginUser,loginUserSuccess,loginUserFailure
}  = authSlice.actions;

export default  authSlice.reducer;