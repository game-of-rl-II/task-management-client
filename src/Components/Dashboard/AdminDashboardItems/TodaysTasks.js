import React, { useState } from 'react';
import useTeamName from '../../hooks/useTeamName';
import { useQuery } from 'react-query'
import { format } from 'date-fns';
import Loading from '../../Shared/Loading/Loading';
import EmployeeTaskModalNew from './EmployeeTaskModalNew';
import DataTable, { createTheme } from 'react-data-table-component'
import useTodaysTasksTable from '../../Tables/useTodaysTasksTable';



const TodaysTasks = () => {
    const [date, setDate] = useState(new Date());

  const [memberTaskModal, setMemberTaskModal] = useState(null);


    const { teamName } = useTeamName()
    let newDate = <p>{format(date, "PP")}</p>;
    const todaysDate = newDate.props.children;

    const {
        data: tasks,
        isLoading,

    } = useQuery(["teamName", teamName], () =>
        fetch(`https://warm-dawn-94442.herokuapp.com/today-tasks?teamName=${teamName}&todaysDate=${todaysDate}`, {
            method: "GET",
        }).then((res) => res.json())
    );


    const [todaysTasksColumns]= useTodaysTasksTable({setMemberTaskModal})

    createTheme('solarized', {
        text: {
          primary: '#029743',
          secondary: '#2aa198',
        },
        background: {
          default: '#F7FEE7',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#CCD1D8',
        },
    
      }, 'white');

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div class="overflow-x-auto mx-10">
            <DataTable columns={todaysTasksColumns} pagination theme='solarized' data={tasks}></DataTable>
            {memberTaskModal && <EmployeeTaskModalNew memberTaskModal={memberTaskModal} />}
        </div>
    );
};

export default TodaysTasks;