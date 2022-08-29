import React, { useState } from 'react';
import useTeamName from '../../hooks/useTeamName';
import { useQuery } from 'react-query'
import { format } from 'date-fns';
import Loading from '../../Shared/Loading/Loading';
import EmployeeTaskModalNew from './EmployeeTaskModalNew';
import DataTable, { createTheme } from 'react-data-table-component'
import useTodaysTasksTable from '../../Tables/useTodaysTasksTable';
import { useTableStyles } from '../../Tables/useTableStyles';



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

const [customTableStyles] = useTableStyles()
    const [todaysTasksColumns] = useTodaysTasksTable({ setMemberTaskModal })

    // createTheme('solarized', {
    //     text: {
    //         primary: '#029743',
    //         secondary: '#2aa198',
    //     },
    //     background: {
    //         default: '#F7FEE7',
    //     },
    //     context: {
    //         background: '#cb4b16',
    //         text: '#FFFFFF',
    //     },
    //     divider: {
    //         default: '#CCD1D8',
    //     },

    // }, 'dark');

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
             <h1 className="w-36 mx-auto py-1 rounded  bg-teal-500 text-center text-white my-4 font-bold">Today's TASK</h1>
       
        <div class="w-3/5 rounded mx-auto">
            <DataTable customStyles={customTableStyles} columns={todaysTasksColumns} pagination data={tasks}></DataTable>
            {memberTaskModal && <EmployeeTaskModalNew memberTaskModal={memberTaskModal} />}

        </div>
        </div>
    );
};

export default TodaysTasks;