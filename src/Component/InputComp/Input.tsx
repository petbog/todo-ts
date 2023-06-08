import { useState } from 'react'
import s from './Input.module.css'
import { useAppDispatch } from '../../Redux'
import { addText } from '../../Redux/Slice/TodosSlice'
import deleteString from '../../Img/icons8-крестик-78.png'

const Input = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const buttonHandle: React.MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(addText(text))
        setText('')
    }
    const deleteTextInput: React.MouseEventHandler<HTMLButtonElement | HTMLImageElement> = () => {
        setText('')
    }
    return (
        <div className={s.container}>
            <div className={s.box}>
                <input value={text} type="text" className={s.input} onChange={onChangeInput} />
                {
                    text && <img onClick={deleteTextInput} className={s.deleteString} src={deleteString} alt="deleteString" />
                }
                <button onClick={buttonHandle} className={s.button}>Add Todo</button>
            </div>
        </div>
    )
}

export default Input