import { FAILED_NOTIFICATION, GET_NOTIFICATION, SUCCESS_NOTIFICATION } from "../constants/AllNotificationsConstant";

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

export const AllNotificationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTIFICATION:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS_NOTIFICATION:
            return {
                data: action.payload,
                isLoading: false,

            }
        case FAILED_NOTIFICATION:
            return {
                data: [],
                isLoading: false,
                error: action.payload

            }
        default:
            return state;
    }
}