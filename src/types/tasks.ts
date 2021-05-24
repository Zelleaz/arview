export interface ITask {
    id: string
    title: string
    type: string
    payload: string | IActivitiesPayload
    date: Date
}

interface IActivitiesPayload {
    address: string
    time: string
}

export interface ITaskInfoProps {
    type: string
    payload: string | IActivitiesPayload
}

