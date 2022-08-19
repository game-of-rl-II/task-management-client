import React, { useEffect, useState } from "react";
import useTask from "../../hooks/useTask";
import TaskModal from "./TaskModal";

const AssignedTasks = () => {
  const [modalData, setModalData] = useState(null);
  const [tasks] = useTask()

  const handleUpdateTaskStatus = (id) => {
      fetch(`http://localhost:5000/task-member/${id}`,{
        method: 'PUT'
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          alert('successfully update')
        }
      })
  }
  

  return (
    <div>
      <h1 className=" bg-slate-900 w-40 mx-auto py-1 rounded  text-center text-white my-8 font-bold">Assigned Task</h1>
      <div className="w-full ">
        <table className="table w-3/4 mx-auto ">
          <thead>
            <tr>
              <th></th>
              <th className="text-sm font-bold">MEMBER NAME</th>
              <th className="text-sm font-bold">MEMBER Id</th>
              <th className="text-sm font-bold">TASK STATUS </th>
              <th className="text-sm font-bold">ACTION</th>
              <th className="text-sm font-bold">TASK</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task._id}>
                <th>{index + 1}</th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="w-14 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={task.image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{task.name}</div>
                    </div>
                  </div>
                </td>

                <td className="text-xs font-bold">{task.memberId}</td>

                <th>
                  <h1 className=" text-gray-800 lg:leading-10 text-xs  ">
                    {task.taskCompletion ? (
                      <span className=" uppercase bg-lime-500 text-white p-1 rounded">Completed</span>
                    ) : (
                      <span className="uppercase bg-yellow-500 text-white p-1 rounded">Pending</span>
                    )}
                  </h1>
                </th>
                <th>
                  <button onClick={()=>handleUpdateTaskStatus(task._id)} disabled={task.taskCompletion === true} className="btn btn-outline btn-success btn-sm">UPDATE</button>
                </th>
                <th>
                  <label onClick={() => setModalData(task)} for="my-modal-3" class="btn btn-outline btn-info btn-sm modal-button">
                    DETAILS
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