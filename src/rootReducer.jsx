import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { addReducer } from "./addReducer";
import { deleteReducer } from "./deleteReducer";
import { filterReducer } from "./filterReducer";
const rootReducer = combineReducers({
    user: userReducer,
    add: addReducer,
    delete: deleteReducer, 
    filter : filterReducer
});
export default rootReducer;