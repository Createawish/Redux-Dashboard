import {configureStore} from "@reduxjs/toolkit";
import {positionReducer} from "./src/features/positions/position-slice";
import {filterReducer} from './src/features/filters/filter-slice';


export const store = configureStore({
        reducer: {
            filters: filterReducer,
            positions: positionReducer
        },
    devTools: true
    }
);
