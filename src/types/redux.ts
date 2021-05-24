import {ITask} from "./tasks";

export interface State {
    date: Date
    tasks: ITask[]
}

export interface Action {
    type: ActionTypes
    payload?: any
}

export enum ActionTypes {
    addTask = 'ADD_TASK',
    editTask = 'EDIT_TASK',
    removeTask = 'REMOVE_TASK',
    changeActiveDay = 'CHANGE_ACTIVE_DAY',
}

