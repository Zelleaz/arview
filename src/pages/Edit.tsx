import React, {useState} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {changeTaskCreator} from "../redux/creators";

const Edit: React.FC = (props) => {
    // @ts-ignore
    const id = props.match.params.id
    const tasks = useAppSelector(state => state.tasks)
    const task = tasks.find(task => task.id === id)
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [time, setTime] = useState('')
    const [budget, setBudget] = useState('')
    const [text, setText] = useState('')
    const [type, setType] = useState('holiday')
    const date = useAppSelector(state => state.date)
    const dispatch = useAppDispatch()

    const reset = () => {
        setTitle('')
        setAddress('')
        setTime('')
        setBudget('')
        setText('')
        setType('')
    }

    const onClick = () => {
        let payload = null
        if (type === 'activities') {
            payload = {
                address,
                time
            }
        } else if (type === 'holiday') {
            payload = budget
        } else {
            payload = text
        }

        dispatch(changeTaskCreator({date, id, title, type, payload}))
        reset()
    }

    return (
        <>
            {task ?
                <div className='container container_centered'>
                    <fieldset>
                        <legend>Название события</legend>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className='input' type="text"/>
                    </fieldset>
                    <fieldset>
                        <legend>Тип события</legend>
                        <select value={type} onChange={(e) => setType(e.target.value)}  className='input'>
                            <option value="activities">Мероприятия</option>
                            <option value="holiday">Праздники</option>
                            <option value="note">Заметки</option>
                        </select>
                    </fieldset>
                    {type === 'activities' ?
                        <>
                            <fieldset>
                                <legend>Куда идти?</legend>
                                <input onChange={(e) => setAddress(e.target.value)} value={address} className='input' type="text"/>
                            </fieldset>
                            <fieldset>
                                <legend>Во сколько?</legend>
                                <input onChange={(e) => setTime(e.target.value)} value={time} className='input' type="text"/>
                            </fieldset>
                        </>
                        : null}
                    {type === 'holiday' ?
                        <>
                            <fieldset>
                                <legend>Введите бюджет</legend>
                                <input onChange={(e) => setBudget(e.target.value)} value={budget} className='input' type="text"/>
                            </fieldset>
                        </>
                        : null
                    }

                    {type === 'note' ?
                        <>
                            <fieldset>
                                <legend>Введите текст заметки</legend>
                                <textarea onChange={(e) => setText(e.target.value)} value={text} className='input'/>
                            </fieldset>
                        </>
                        : null
                    }

                    <div className="form-buttons">
                        <NavLink to='/' onClick={reset} className="btn form-btn">Отмена</NavLink>
                        <NavLink to='/' onClick={onClick} className="btn form-btn">Сохранить</NavLink>
                    </div>
                </div> : <Redirect to='/' />}
        </>
    );
};

export default Edit;