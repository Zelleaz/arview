import {Action, ActionTypes} from "../types/redux";
import {ITask} from "../types/tasks";

export const changeDateCreator = (payload: Date): Action => {
    return {
        type: ActionTypes.changeActiveDay,
        payload
    }
}
export  const addTaskCreator = (payload: ITask): Action => {
    return {
        type: ActionTypes.addTask,
        payload
    }
}

export const removeTaskCreator = (payload: string): Action => {
    return {
        type: ActionTypes.removeTask,
        payload
    }
}

export const changeTaskCreator = (payload: ITask): Action => {
    return {
        type: ActionTypes.editTask,
        payload
    }
}