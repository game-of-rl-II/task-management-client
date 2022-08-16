import { MANAGE_ATTENDANCE_MEMBERS_DATA, MANAGE_ATTENDANCE_MEMBERS_FAILED, MANAGE_ATTENDANCE_MEMBERS_SUCCESS } from "../constants/ManageAttendanceConstant";
const initialState = {
    isLoading: false,
    data: [],
    error: null
}
export const manageAttendanceReducers = (state = initialState, action) =>{
    switch (action.type) {
        case MANAGE_ATTENDANCE_MEMBERS_DATA:
          return {
            ...state,
            isLoading: true,
          };
        case MANAGE_ATTENDANCE_MEMBERS_SUCCESS:
          return {
            isLoading: false,
            data: action.payload,
            error: null,
          };
        case MANAGE_ATTENDANCE_MEMBERS_FAILED:
          return {
            isLoading: false,
            data: [],
            error: action.payload,
          };
    
        default:
          return state;
      }
}
