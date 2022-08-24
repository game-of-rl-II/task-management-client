import React, {  useEffect, useState } from "react";
import useTask from "../../hooks/useTask";
import TaskModal from "./TaskModal";
import { toast } from "react-toastify";
const AssignedTasks = () => {
  const [modalData, setModalData] = useState(null);
  const {tasks} = useTask()


 
 
  const handleUpdateTaskStatus = (id) => {
    fetch(`https://warm-dawn-94442.herokuapp.com/task-member/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('successfully updated')

        }
      });
  };

  return (
    <div>
      <h1 className=" bg-slate-900 w-36 mx-auto py-1 rounded  text-center text-white my-8 font-bold">My Tasks</h1>
      <div className="w-full ">
        <table className="table w-3/4 mx-auto ">
          <thead>
            <tr>
              <th></th>
              <th className="text-sm font-bold">Task Date</th>
              <th className="text-sm font-bold">Task Status</th>
              <th className="text-sm font-bold">Deadline </th>
              <th className="text-sm font-bold">ACTION</th>
              <th className="text-sm font-bold">TASK</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task._id} >
                <th>{index + 1}</th>
                <td>
                  {task.taskDate}
                </td>


                <td>
                  <h1 className=" text-gray-800 lg:leading-10 text-xs  ">
                    {task.taskCompletion ? (
                      <span className=" uppercase bg-lime-500 text-white p-1 rounded">Completed</span>
                    ) : (
                      <span className="uppercase bg-yellow-500 text-white p-1 rounded">Pending</span>
                    )}
                  </h1>
                </td>
                <td>{task.deadline}</td>
                <th>
                  <button
                    onClick={() => handleUpdateTaskStatus(task._id)}
                    disabled={task.taskCompletion === true}
                    className="btn btn-outline btn-success btn-sm"
                  >
                    UPDATE
                  </button>
                </th>
                <th>
                  <label onClick={() => setModalData(task)} for="my-modal-3" className="btn btn-outline btn-info btn-sm modal-button">
                    View Task
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalData && <TaskModal modalData={modalData} setModalData={setModalData} />}
    
    </div>
  );
};

export default AssignedTasks;
