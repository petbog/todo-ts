import { useSelector } from 'react-redux'
import s from './TodosItem.module.css'
import { selectTodos } from '../../Redux/Slice/TodosSlice'
import Todo from '../Todo/Todo'

const TodosItem:React.FC = () => {
    const { items } = useSelector(selectTodos)

    return (
        <div className={s.todos}>
            {
                items.map((item) => <Todo key={item.id} {...item}/>)
            }
        </div>
    )
}

export default TodosItem