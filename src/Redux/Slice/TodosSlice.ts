import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from ".."
import axios from "axios"


export const getTodos = createAsyncThunk(
    'todos/getTodos',
    async function () {

        const { data } = await axios.get<itemsType[]>(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
        return data as itemsType[]
    }
)

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'succes',
    ERROR = 'error'
}

type itemsType = {
    body: string,
    id: number,
    title: string,
    userId: number,
}
interface initialStateType {
    items: itemsType[],
    status: Status
}

const initialState: initialStateType = {
    items: [],
    status: Status.LOADING
}

export const TodosSlise = createSlice({
    name: 'todos',
    initialState,
    reducers: {
    }, extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state) => {
            state.status = Status.LOADING
            state.items = []
        });
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.items = action.payload
        });
        builder.addCase(getTodos.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        });
    }
})

export const { } = TodosSlise.actions


export const selectTodos = (state: RootState) => state.todos

export default TodosSlise.reducer