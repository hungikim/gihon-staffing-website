import { configureStore } from '@reduxjs/toolkit'
import mobileReducer from './mobileSlice'

export default configureStore({
    reducer: {
        mobile: mobileReducer
    },
})