import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./slice/sidebarSlice";
import { commonSlice } from "./slice/commonSlice";

export const action = {
    ...commonSlice.actions,
    ...sidebarSlice.actions
}

const store = configureStore({
    reducer:{
        Common : commonSlice.reducer,
        SideBar: sidebarSlice.reducer
    }
})

export default store;