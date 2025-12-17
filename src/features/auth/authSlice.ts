import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./authTypes";
import { loginMethod } from "./authThunks";

const initialState: AuthState = {
    userToken: null,
    userData: null,
    isLoading: false,
    isError: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearUserData(state) {
            state.userToken = null;
            state.userData = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginMethod.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(loginMethod.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userToken = action.payload.token;
            })
            .addCase(loginMethod.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const { clearUserData } = authSlice.actions;
export default authSlice.reducer;
