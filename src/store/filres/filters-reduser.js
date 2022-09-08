import {ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER} from "./filtres-actions";
const initialState = {
    filter: null,
    indices: null
}

export const filterReduser = (state = initialState, action) =>{
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
            console.log('1')
            return [];
        }
        default :{
            return state;
        }
    }
}
