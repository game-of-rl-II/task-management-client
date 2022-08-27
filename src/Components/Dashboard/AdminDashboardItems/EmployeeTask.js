import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from 'react-data-table-component'
import "react-day-picker/dist/style.css";
import useTeamName from "../../hooks/useTeamName";
import EmployeeTaskModalNew from "./EmployeeTaskModalNew";
import useAssignedTasksTable from "../../Tables/useAssignedTasksTable";
const EmployeeTask = () => {
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

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
        backgroundColor: '#ECFCCB',
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };
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
        <h1 className=" bg-secondary w-44 mx-auto py-1 rounded  text-center text-white my-8 font-bold">MEMBERS TASK</h1>
        <div className="mx-5">
          <DataTable customStyles={customStyles} columns={assignedTasksColumns} pagination data={memberTask}></DataTable>
        </div>
      </div>
      {memberTaskModal && <EmployeeTaskModalNew memberTaskModal={memberTaskModal} />}
    </div>
  );
};

export default EmployeeTask;
