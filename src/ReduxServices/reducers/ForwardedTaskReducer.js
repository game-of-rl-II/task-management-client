import { FAILED_FORWARDED_TASKS, GET_FORWARDED_TASKS, SUCCESS_FORWARDED_TASKS } from "../constants/ForwardedTasksConstants";

const initialState = {
    isLoading: false,
    data: [],
    error: null
}
export const ForwardedTaskReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_FORWARDED_TASKS:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS_FORWARDED_TASKS:
            return {
                data: action.payload,
                isLoading: false,

            }
        case FAILED_FORWARDED_TASKS:
            return {
                data: [],
                isLoading: false,
                error: action.payload

            }
        default:
            return state;
    }
}