import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { AllNotificationsReducer } from "./ReduxServices/reducers/AllNotificationsReducer";
import { manageAttendanceReducers } from "./ReduxServices/reducers/ManageAttendanceReducers";

const rootReducers = combineReducers({
    notification: AllNotificationsReducer,
    attendance: manageAttendanceReducers
})

const store = createStore(AllNotificationsReducer, applyMiddleware(thunk));
export default store;
