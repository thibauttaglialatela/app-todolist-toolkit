import { configureStore } from '@reduxjs/toolkit'
import taskListSlice from "./slices/taskListSlice.js";

export default configureStore({
    reducer: {
        taskList: taskListSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        //Middleware personnalisé
    ])
})
