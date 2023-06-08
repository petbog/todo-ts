import { useEffect, useState } from 'react'
import s from './HomePage.module.css'
import axios from 'axios'
import { useAppDispatch } from '../../Redux';
import { getTodos, selectTodos } from '../../Redux/Slice/TodosSlice';
import { useSelector } from 'react-redux';


const HomePage:React.FC = () => {
const dispatch =useAppDispatch()
const {items} = useSelector(selectTodos)

    useEffect(() => { 
        dispatch(getTodos())
    }, [])

    return (
        <div className={s.container}>
            {
                items.map((item) => (
                    <div key={item.id}>
                        <span>{item.title}</span>
                    </div>
                )
                )
            }
        </div>
    )
}


export default HomePage