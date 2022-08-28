import { combineReducers } from 'redux';

import { AllNotificationsReducer } from "./AllNotificationsReducer";
import { ForwardedTaskReducer } from "./ForwardedTaskReducer";

const rootReducer = combineReducers({
    AllNotificationsReducer,
    ForwardedTaskReducer
})
export default rootReducer;