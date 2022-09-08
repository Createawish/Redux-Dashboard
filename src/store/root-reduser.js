import {combineReducers} from "redux";
import {positionReducer} from "./position/position-reduser";
import {filterReduser} from "./filres/filters-reduser";


export const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filterReduser,
})