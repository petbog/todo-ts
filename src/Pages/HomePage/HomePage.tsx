import { useEffect, useState } from 'react'
import s from './HomePage.module.css'
import axios from 'axios'


type dataType = {
    body: string,
    id: number,
    title: string,
    userId: number,
}


const HomePage = () => {
    const [todos, setTodos] = useState<dataType[]>([])

    useEffect(() => {
        async function fetchData() {
            const data = await axios.get<dataType[]>(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5`)
            setTodos(data.data)
        }
        fetchData()
    }, [])

    return (
        <div className={s.container}>
            {
                todos.map((todo) => (
                    <div key={todo.id}>
                        <span>{todo.title}</span>
                    </div>
                )
                )
            }
        </div>
    )
}


export default HomePage