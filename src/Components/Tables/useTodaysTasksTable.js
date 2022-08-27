import React from 'react';

const useTodaysTasksTable = ({setMemberTaskModal}) => {
    const todaysTasksColumns = [ 
        { 
            name: <h2>Name</h2>,
            selector: task=> <h2>{task.name}</h2>
        },
        { 
            name: <h2>Member Id</h2>,
            selector: task=> <h2>{task.memberId}</h2>
        },
        { 
            name: <h2>Deadline</h2>,
            selector: task=> <h2>{task.deadline}</h2>
        },
        { 
            name: <h2>Details</h2>,
            selector: task=> <label onClick={() => setMemberTaskModal(task)} for="my-modal-4" className="btn modal-button btn-outline btn-success btn-sm">
            View Details
          </label>
        },
    ]
    return [todaysTasksColumns]
};

export default useTodaysTasksTable;