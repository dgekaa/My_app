import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";

import auth from "./auth";
import toDo from "./toDo";

const rootReducer = combineReducers({
    auth,
    toDo,
	form: formReducer
});

export default rootReducer;