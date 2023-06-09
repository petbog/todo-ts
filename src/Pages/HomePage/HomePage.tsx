import { useEffect, useState } from 'react'
import s from './HomePage.module.css'
import { useAppDispatch } from '../../Redux';
import { getTodos } from '../../Redux/Slice/TodosSlice';
import Input from '../../Component/InputComp/Input';
import TodosItem from '../../Component/Todos/TodosItem';


const HomePage:React.FC = () => {
const dispatch =useAppDispatch()


    useEffect(() => { 
        dispatch(getTodos())
    }, [])

    return (
        <div className={s.container}>
            <div className="">
            <Input/>
            </div>
            <div className="">
            <TodosItem/>
            </div>
        </div>
    )
}


export default HomePage