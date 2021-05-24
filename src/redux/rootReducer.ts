import {Action, ActionTypes, State} from "../types/redux";

const initialState: State = {
    tasks: [
        {type: "note", id: 'asd', title: 'Some title', payload: 'some long text with any content', date: new Date()},
        {type: "note", id: 'asds', title: 'Some title', payload: 'some long text with any content', date: new Date()},
    ],
    date: new Date()
}

export const rootReducer = (state: State = initialState, {type, payload}: Action): State => {
    switch (type) {
        case ActionTypes.addTask:
            return {
                ...state,
                tasks: [...state.tasks, payload]
            }
        case ActionTypes.removeTask:
            return {
                ...state,
                tasks: state.tasks.filter((task) => {
                    if (task.id !== payload) {
                        return task
                    }
                })
            }
        case ActionTypes.editTask:
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === payload.id) {
                        return payload
                    } else {
                        return task
                    }
                })
            }
        case ActionTypes.changeActiveDay:
            return {
                ...state,
                date: payload
            }
        default:
            return state
    }
}