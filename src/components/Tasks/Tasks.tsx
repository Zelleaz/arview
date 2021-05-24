import React from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import Task from './Task';
import {dateValidate} from "../helpers/dateValidate";

const Tasks: React.FC<{ date: Date }> = ({date}) => {
    const tasks = useAppSelector(state => state.tasks)
    const current = tasks.filter(task => {
        if (dateValidate(task.date) === dateValidate(date)) {
            return task
        }
    })

    return (
        <>
            {
                current.length !== 0 ?
                    <ul className='tasks'>
                        {current.map(({payload, type, id, title, date}) => {
                            return <Task date={date} payload={payload} title={title} type={type} id={id} key={id} />
                        })}
                    </ul> : <h1>Заметок не найдено</h1>
            }
        </>
    );
};

export default React.memo(Tasks);