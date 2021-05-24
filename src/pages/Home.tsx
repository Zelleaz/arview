import React, {useEffect, useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import {useDispatch} from "react-redux";
import {changeDateCreator} from "../redux/creators";
import Tasks from "../components/Tasks/Tasks";
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
    const [date, setDate] = useState(new Date())
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeDateCreator(date))
    }, [date])

    return (
        <div className='container'>
            <div className="container-item">
                <Calendar className='calendar' value={date} onChange={setDate} />
                <NavLink className='btn' to='/add'>Добавить</NavLink>
            </div>

            <div className="container-item">
                <Tasks date={date} />
            </div>
        </div>
    );
};

export default Home;