import React, { useState } from "react";
import useTask from "../../hooks/useTask";
import DataTable, { createTheme } from 'react-data-table-component'
// import TaskModal from './TaskModal';
import UncompletedTaskModal from "./UncompletedTaskModal";
import useUncompletedTasksTable from "../../Tables/useUnCompletedTasksTable";

const UncompletedTask = () => {
  const [taskData, setTaskData] = useState(null);
  const [unCompletedTasksColumns] = useUncompletedTasksTable({ setTaskData })
  const { unCompletedTasks } = useTask()

  // createTheme('solarized', {
  //   text: {
  //     primary: '#029743',
  //     secondary: '#2aa198',
  //   },
  //   background: {
  //     default: '#ECFCCB',
  //   },
  //   context: {
  //     background: '#cb4b16',
  //     text: '#FFFFFF',
  //   },
  //   divider: {
  //     default: '#C1C6CD',
  //   },

  // }, 'dark');

  return (
    <div>
      <h1 className=" bg-secondary w-44 mx-auto py-1 rounded  text-center text-white my-8 font-bold">Uncompleted Task</h1>
      <div className="mx-5">

        <DataTable columns={unCompletedTasksColumns} data={unCompletedTasks} ></DataTable>
      </div>
      {taskData && <UncompletedTaskModal taskData={taskData} setTaskData={setTaskData} />}
    </div>
  );
};

export default UncompletedTask;
