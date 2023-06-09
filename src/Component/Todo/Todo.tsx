import { itemsType } from '../../Redux/Slice/TodosSlice'
import s from './Todo.module.css'




const Todo: React.FC<itemsType> = (item) => {
    const { title,completed } = item
    return (
        <div className={s.todo}>
            <input type="checkbox"  />
            <span>{title}</span>
        </div>
    )
}


export default Todo