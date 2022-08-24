import React, { useState } from "react";
import useTask from "../../hooks/useTask";
// import TaskModal from './TaskModal';
import UncompletedTaskModal from "./UncompletedTaskModal";

const UncompletedTask = () => {
  const [taskData, setTaskData] = useState(null);
  const {unCompletedTasks} = useTask()
  // const unCompletedTasks = tasks.filter(task => task.taskCompletion !== true)
  
  return (
    <div>
      <h1 className=" bg-secondary w-44 mx-auto py-1 rounded  text-center text-white my-8 font-bold">Uncompleted Task</h1>
      <div className="w-full ">
        <table className="table w-3/4 mx-auto ">
          <thead>
            <tr>
              <th></th>
              <th className="text-sm font-bold">MEMBER NAME</th>
              <th className="text-sm font-bold">MEMBER Id</th>
              <th className="text-sm font-bold">TASK STATUS </th>
              <th className="text-sm font-bold">TASK</th>
            </tr>
          </thead>
          <tbody>
            {unCompletedTasks.map((task, index) => (
              <tr key={task._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-14 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={task.image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{task.name}</div>
                    </div>
                  </div>
                </td>

                <td className="text-xs font-bold">{task.memberId}</td>

                <th>
                  <span className="uppercase text-xs font-bold bg-yellow-500 text-white p-1 rounded">Pending</span>
                </th>
                <th>
                  <label onClick={() => setTaskData(task)} for="my-modal-6" className="btn modal-button btn-outline btn-success btn-sm">
                    DETAILS
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {taskData && <UncompletedTaskModal taskData={taskData} setTaskData={setTaskData} />}
    </div>
  );
};

export default UncompletedTask;
