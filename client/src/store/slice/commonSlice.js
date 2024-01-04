import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
    name : 'common',
    initialState:{
        tablist:'close', dropdownSearch: 'close'
    },
    reducers:{
        setTablist(state,action){
            state.tablist = action.payload
        },
        setDropdownSearch(state,action){
            state.dropdownSearch = action.payload
        }
    }
})