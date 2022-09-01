import { FAILED_FORWARDED_TASKS, GET_FORWARDED_TASKS, SUCCESS_FORWARDED_TASKS } from "../constants/ForwardedTasksConstants";
import axios from 'axios'

const getForwardedTasks = (email) => async (dispatch) => {
    dispatch({ type: GET_FORWARDED_TASKS });
    try {
        const result = await axios.get(`http://localhost:5000/forwarded-task/${email}`);
        dispatch({ type: SUCCESS_FORWARDED_TASKS, payload: result.data });
    } catch (error) {
        dispatch({ type: FAILED_FORWARDED_TASKS, payload: error.message });
    }
}
export default getForwardedTasks;