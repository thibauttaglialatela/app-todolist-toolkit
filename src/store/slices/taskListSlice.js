import {createSlice} from "@reduxjs/toolkit";

const taskListSlice = createSlice({
    name: 'taskList',
    initialState: {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    reducers: {
        addTask: (state, action) => {

        },
        updateTask: state => {

        },
        deleteTask: (state) => {

        }
    }
})

export const {addTask, updateTask, deleteTask} = createSlice.actions;
export default taskListSlice.reducer;
