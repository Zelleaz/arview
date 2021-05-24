import React from 'react';
import {ITask} from "../../types/tasks";
import TaskInfo from "./TaskInfo";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {removeTaskCreator} from "../../redux/creators";
import { NavLink } from 'react-router-dom';

const Task: React.FC<ITask> = ({type, title, payload, id}) => {
    const dispatch = useAppDispatch()

    return (
        <li className='tasks-item'>
            <h3 className='task-item__title'>{title}</h3>

            <div className="tasks-item-control">
                <button onClick={() => dispatch(removeTaskCreator(id))} className='tasks-item__btn tasks-item__btn_delete'>Удалить</button>
                <NavLink to={`/edit/${id}`} className='tasks-item__btn'>Редактировать</NavLink>
            </div>

            <TaskInfo type={type} payload={payload} />
        </li>
    );
};

export default Task;