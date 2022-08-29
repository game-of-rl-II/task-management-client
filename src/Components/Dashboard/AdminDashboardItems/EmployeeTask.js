import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from 'react-data-table-component'
import "react-day-picker/dist/style.css";
import useTeamName from "../../hooks/useTeamName";
import EmployeeTaskModalNew from "./EmployeeTaskModalNew";
import useAssignedTasksTable from "../../Tables/useAssignedTasksTable";
import { useTableStyles } from "../../Tables/useTableStyles";

const EmployeeTask = () => {
  const [customTableStyles] = useTableStyles()

  const [memberTaskModal, setMemberTaskModal] = useState(null);

  const { teamName } = useTeamName();

  const [memberTask, setMemberTask] = useState([]);

  useEffect(() => {
    if (teamName) {
      fetch(`https://warm-dawn-94442.herokuapp.com/task/${teamName}`)
        .then((res) => res.json())
        .then((data) => {
          setMemberTask(data);
        });
    }
  }, [memberTask, teamName]);


  const [assignedTasksColumns] = useAssignedTasksTable({ setMemberTaskModal })

  
  // createTheme('solarized', {
  //   text: {
  //     primary: '#029743',
  //     secondary: '#2aa198',
  //   },
  //   background: {
  //     default: '#F7FEE7',
  //   },
  //   context: {
  //     background: '#cb4b16',
  //     text: '#FFFFFF',
  //   },
  //   divider: {
  //     default: '#CCD1D8',
  //   },

  // }, 'dark');

  return (
    <div>
      <div>
        <h1 className="w-44 mx-auto py-1 rounded  bg-teal-500 text-center text-white my-4 font-bold">MEMBERS TASK</h1>
        <div className="w-3/5 rounded mx-auto">
          <DataTable customStyles={customTableStyles} columns={assignedTasksColumns} pagination data={memberTask}></DataTable>
        </div>
      </div>
      {memberTaskModal && <EmployeeTaskModalNew memberTaskModal={memberTaskModal} />}
    </div>
  );
};

export default EmployeeTask;