import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "./type";

const initialState: initialStateType = {
    showLoader: false,
}

const reviloSlice = createSlice({
    name: 'Revilo',
    initialState: initialState,
    reducers: {
        showLoaderToogler: (state) => {
            state.showLoader = !state.showLoader;
        }
    },
})

const reviloActions = reviloSlice.actions;

export {reviloActions, reviloSlice};