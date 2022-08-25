import axios from "axios";
import {
  MANAGE_ATTENDANCE_MEMBERS_DATA,
  MANAGE_ATTENDANCE_MEMBERS_FAILED,
  MANAGE_ATTENDANCE_MEMBERS_SUCCESS,
} from "../constants/ManageAttendanceConstant";

const getMembers = () => async (dispatch) => {
  dispatch({ type: MANAGE_ATTENDANCE_MEMBERS_DATA });
  try {
    const result = await axios.get("http://localhost:5000/manage-attendance");
    dispatch({ type: MANAGE_ATTENDANCE_MEMBERS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: MANAGE_ATTENDANCE_MEMBERS_FAILED, payload: error.message });
  }
};
export default getMembers;
