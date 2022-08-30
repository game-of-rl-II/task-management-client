import React, { useState } from "react";
import { toast } from "react-toastify";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import useTeamName from "../../hooks/useTeamName";
import { auth } from "../../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import useNotifyMember from "../../hooks/useNotifyMember";
const AssignTaskModal = ({ assignTaskMember, setAssignTaskMember }) => {
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const [date, setDate] = useState(new Date());
  let newDate = <p>{format(date, "PP")}</p>;
  const taskDate = newDate.props.children;
  const { teamName } = useTeamName();
  const [handleNotificationMember] = useNotifyMember()
  const handleAssignTask = (event) => {
    event.preventDefault();
    const adminEmail = admin?.email
    const name = assignTaskMember.name;
    const memberId = assignTaskMember?.id;
    const task = event.target.task.value;
    const deadline = event.target.deadline.value;
    const taskCompletion = false;
    const assignTask = {
      adminEmail,
      name,
      memberId,
      task,
      deadline,
      taskCompletion,
      taskDate,
      teamName,
    };
    const message = 'A task has been added to you'
    const success = 'Task assigned successfully'
    const navLink ='/dashboard/assignedTasks'
    const url = "https://warm-dawn-94442.herokuapp.com/assign-task";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assignTask),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.acknowledged) {
          handleNotificationMember({memberId, message, success, navLink})
        }
        setAssignTaskMember(null);
      });
  };
  if (adminLoading) {
    return <></>
  }

  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div 
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        class="modal-box bg-white border-y-4 border-teal-500">
          <p class="py-4">Employee Name: {assignTaskMember.name}</p>
          <p class="py-4">Employee ID: {assignTaskMember.id}</p>
          <p class="py-4">Task Date: {taskDate}</p>
          <form onSubmit={handleAssignTask}>
            <div className="mb-8">
              <div className="md:flex-1 mt-2 mb:mt-0 ">
                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold p-2">
                  ASSIGNED TASK DETAILS
                </label>
                <textarea
                  required
                  name="task"
                  className="w-full shadow-inner p-4 border-0 rounded-xl"
                  placeholder=" Enter Task Details..."
                ></textarea>
              </div>
              <div className="flex justify-end mt-2 mb:mt-0 md:px-3">
                <div className="md:flex w-full mb-4">
                  <div className="md:flex-1 md:pr-3 mb-4 md:mb-0">
                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold p-2">
                      SET A DEADLINE
                    </label>

                    <select name="deadline" className="select  w-full max-w-xs">
                      <option>5 Day</option>
                      <option>4 Day</option>
                      <option>3 Day</option>
                      <option>2 Day</option>
                      <option>1 Day</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-action">
              <label for="my-modal-6" class="btn btn-error text-white hover:bg-red-600  btn-sm px-5">
                CANCEL
              </label>
              <button
                for="my-modal-6"
                type="submit"
                class="btn bg-teal-500 hover:bg-teal-700 text-white border-none btn-sm px-5"
              >
                Assign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignTaskModal;
