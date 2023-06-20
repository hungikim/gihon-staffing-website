import { createSlice } from "@reduxjs/toolkit";

export const mobileSlice = createSlice({
    name: 'mobile',
    initialState: {
        isMobile: false,
    },
    reducers: {
        // Used in UpdateVideo component to fire refresh in Video component
        setIsMobile: (state, action) => {
            state.isMobile = action.payload
        }
    }
})

export const { setIsMobile } = mobileSlice.actions

export default mobileSlice.reducer