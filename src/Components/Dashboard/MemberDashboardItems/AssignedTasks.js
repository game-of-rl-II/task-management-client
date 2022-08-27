import React, { useEffect, useState } from "react";
import useTask from "../../hooks/useTask";
import TaskModal from "./TaskModal";
import DataTable from 'react-data-table-component';

import useNotifyAdmin from "../../hooks/useNotifyAdmin";
import useMyTasksTable from "../../Tables/useMyTasksTable";

const AssignedTasks = () => {
  const [modalData, setModalData] = useState(null);
  const { tasks } = useTask();
  const tasksData = [...tasks].reverse()

  


  const [handleNotification] = useNotifyAdmin()

  // using react data table to show data
  


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

  const [myTasksColumns] = useMyTasksTable({setModalData, handleUpdateTaskStatus})


  return (
    <div>
      <h1 className=" bg-secondary w-36 mx-auto py-1 rounded  text-center text-white my-8 font-bold">
        My Tasks
      </h1>

      <div className="w-full container">

        <DataTable columns={myTasksColumns} data={tasksData} pagination highlightOnHover fixedHeader fixedHeaderScrollHeight="550px"></DataTable>
      </div>
      {modalData && (
        <TaskModal modalData={modalData} setModalData={setModalData} />
      )}
    </div>
  );
};

export default AssignedTasks;
