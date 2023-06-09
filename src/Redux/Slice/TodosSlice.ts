import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from ".."
import axios from "axios"


export const getTodos = createAsyncThunk(
    'todos/getTodos',
    async function () {

        const { data } = await axios.get<itemsType[]>(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
        return data as itemsType[]
    }
)

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'succes',
    ERROR = 'error'
}

export type itemsType = {
    completed: boolean,
    id: number,
    title: string,
    userId: number,
}
interface initialStateType {
    items: itemsType[],
    text: string
    status: Status
}

const initialState: initialStateType = {
    items: [],
    status: Status.LOADING,
    text: ''
}

export const TodosSlise = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addText(state, action: PayloadAction<string>) {
            state.items = [...state.items, {
                id: 1,
                title: action.payload,
                userId: 1,
                completed:false
            }]
        }
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

export const { addText } = TodosSlise.actions


export const selectTodos = (state: RootState) => state.todos

export default TodosSlise.reducer