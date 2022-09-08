import {ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER} from "./filtres-actions";


export const filterReduser = (state, action) =>{
    switch (action.type) {
        case ADD_FILTER: {
            if(state.indices(action.filter)){
                return state;
            }
            return [...state, action.filter]
        }
        case REMOVE_FILTER: {
            return state.filter(item => item !== action.filter)
        }
        case CLEAR_FILTER: {
            return [];
        }
        default :{
            return state;
        }
    }
}