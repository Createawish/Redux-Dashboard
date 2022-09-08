import {combineReducers} from "redux";
import {positionReducer} from "./position/position-reduser";



export const rootReducer = combineReducers({
    positions: positionReducer,
})