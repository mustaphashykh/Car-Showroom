import { createSlice } from "@reduxjs/toolkit";

const reviloSlice = createSlice({
    name: 'Revilo',
    initialState: {},
    reducers: {},
})

const reviloActions = reviloSlice.actions;

export {reviloActions, reviloSlice};