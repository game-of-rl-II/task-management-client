import React, { useEffect, useState } from "react";
import useTask from "../../hooks/useTask";
import TaskModal from "./TaskModal";
import DataTable from 'react-data-table-component';

import useNotifyAdmin from "../../hooks/useNotifyAdmin";

const AssignedTasks = () => {
  const [modalData, setModalData] = useState(null);
  const { tasks } = useTask();
  const [handleNotification] = useNotifyAdmin()

  // using react data table to show data
  const columns = [
    {
      name: <h1>Assigned Date</h1>,
      selector: task => <h1>{task?.taskDate}</h1>
    },
    {
      name: <h1>TaskDate</h1>,
      selector: task => <h1>{task.taskCompletion ? 'Done' : "pending"}</h1>
    },
    {
      name: <h1>Task Deadline</h1>,
      selector: task => <h1>{task?.deadline}</h1>
    },
    {
      name: 'Update',
      selector: task => <button
        onClick={() => handleUpdateTaskStatus(task)}
        disabled={task.taskCompletion === true}
        className="btn btn-outline btn-primary btn-sm"
      >
        UPDATE
      </button>
    },
    {
      name: 'View Task',
      selector: task => <label
        onClick={() => setModalData(task)}
        for="my-modal-3"
        className="btn btn-outline btn-info btn-sm modal-button"
      >
        View Task
      </label>
    },

  ]



  const handleUpdateTaskStatus = (task) => {
    const adminEmail = task?.adminEmail;
    const id = task?._id
    const name = task?.name
    const message = `${name} has updated his task status`
    const success = "Successfully updated"
    fetch(`https://warm-dawn-94442.herokuapp.com/task-member/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          handleNotification({ message, adminEmail, success })
        }
      });
  };

  return (
    <div>
      <h1 className=" bg-secondary w-36 mx-auto py-1 rounded  text-center text-white my-8 font-bold">
        My Tasks
      </h1>

      <div className="w-full">

        <DataTable columns={columns} data={tasks} pagination highlightOnHover fixedHeader fixedHeaderScrollHeight="550px"></DataTable>
      </div>
      {modalData && (
        <TaskModal modalData={modalData} setModalData={setModalData} />
      )}
    </div>
  );
};

export default AssignedTasks;
