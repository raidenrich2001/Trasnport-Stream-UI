import { createSlice } from "@reduxjs/toolkit"

export const sidebarSlice =  createSlice({
    name: 'sidebar',
    initialState : {toggle: false, fullScreen: false, sidebarDropDown: 'Client'},
    reducers: {
        setToggle(state,action) {
            state.toggle = !state.toggle
        },
        setFullScreen(state,action) {
            state.fullScreen = action.payload
        },
        setSidebarDropdown(state,action){
            state.sidebarDropDown = action.payload
        }
    }
})
