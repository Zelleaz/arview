import {createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {useDispatch} from "react-redux";

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch