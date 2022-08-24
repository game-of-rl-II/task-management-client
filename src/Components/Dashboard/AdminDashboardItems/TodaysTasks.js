import React, { useState } from 'react';
import useTeamName from '../../hooks/useTeamName';
import { useQuery } from 'react-query'
import { format } from 'date-fns';
import Loading from '../../Shared/Loading/Loading';


const TodaysTasks = () => {
    const [date, setDate] = useState(new Date());

    const { teamName } = useTeamName()
    let newDate = <p>{format(date, "PP")}</p>;
    const todaysDate = newDate.props.children;

    const {
        data: tasks,
        isLoading,

    } = useQuery(["teamName", teamName], () =>
        fetch(`http://localhost:5000/today-tasks?teamName=${teamName}&todaysDate=${todaysDate}`, {
            method: "GET",
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div class="overflow-x-auto mx-10">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Member ID</th>
                        <th>Task Status</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (<tr ky={task?._id}>
                            <th>{task?.name}</th>
                            <td>{task?.memberId}</td>
                            <td className={task?.taskCompletion ? 'text-green-500' : 'text-yellow-500'}>{task?.taskCompletion ? 'Done' : 'Pending'}</td>
                            <th><button className="btn btn-primary">Details</button></th>

                        </tr>))}

                </tbody>
            </table>
        </div>
    );
};

export default TodaysTasks;