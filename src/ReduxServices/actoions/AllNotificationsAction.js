import { FAILED_NOTIFICATION, GET_NOTIFICATION, SUCCESS_NOTIFICATION } from "../constants/AllNotificationsConstant";
import axios from 'axios'

const getAllNotification = () => async (dispatch) => {
    dispatch({ type: GET_NOTIFICATION });
    try {
        const result = await axios.get("http://localhost:5000/all-notification");
        dispatch({ type: SUCCESS_NOTIFICATION, payload: result.data });
    } catch (error) {
        dispatch({ type: FAILED_NOTIFICATION, payload: error.message });
    }
}
export default getAllNotification;