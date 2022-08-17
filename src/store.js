import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { manageAttendanceReducers } from "./ReduxServices/reducers/ManageAttendanceReducers";

const store = createStore(manageAttendanceReducers,applyMiddleware(thunk));
export default store;
