import {configureStore} from "@reduxjs/toolkit";
import {filterReduser} from "./src/store/filres/filters-reduser";


export const store = configureStore({
        reducer: {
            filters: filterReduser()
        },
    }
);
