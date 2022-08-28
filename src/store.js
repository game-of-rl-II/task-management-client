import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { AllNotificationsReducer } from "./ReduxServices/reducers/AllNotificationsReducer";
import { ForwardedTaskReducer } from "./ReduxServices/reducers/ForwardedTaskReducer";
import rootReducer from './ReduxServices/reducers/rootReducer';


const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
