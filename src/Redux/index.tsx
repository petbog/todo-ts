import { configureStore } from '@reduxjs/toolkit'
import todos from './Slice/TodosSlice'
import { useDispatch } from 'react-redux'


export const store = configureStore({
    reducer: {
        todos
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch