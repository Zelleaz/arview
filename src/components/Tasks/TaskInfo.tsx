import React from 'react';
import {ITaskInfoProps} from "../../types/tasks";

const TaskInfo: React.FC<ITaskInfoProps> = ({type, payload}) => {
    switch (type) {
        case "activities":
            return (
                <>
                   <div className="task-item__info">
                       Адрес: {typeof payload === 'object' ? payload.address : null}
                   </div>
                   <div className="task-item__info">
                       Время: {typeof payload === 'object' ? payload.time : null}
                   </div>
                </>
            )
        case "holiday":
            return (
                <>
                    <div className="task-item__info">
                        Бюджет: {payload}
                    </div>
                </>
            )
        case "note":
            return (
                <>
                    <div className="task-item__info">
                        {payload}
                    </div>
                </>
            )
        default: return <></>
    }
};

export default TaskInfo;