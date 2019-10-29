import {  } from "../types";

const initialState = {
    
};

const toDo = (state = initialState, action) => {
    switch (action.type) {
        case "IS_REGISTER_OR_LOGIN":
            return {
                ...state,
            }        
    default:
        return {...state}
    }
}

export default toDo;