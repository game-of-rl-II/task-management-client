
const useAssignedTasksTable = ({setMemberTaskModal}) => {
    const assignedTasksColumns =[
        {
            name: <h2>Member Name</h2>,
            selector: task => <h2>{task.name}</h2>
        },
        {
            name: <h2>Member ID</h2>,
            selector: task => <h2>{task.memberId}</h2>
        },
        {
            name: <h2>Date</h2>,
            selector: task => <h2 className={task.taskCompletion !== true && 'text-red-600'}>{task.taskDate}</h2>
        },
        {
            name: <h2>Details</h2>,
            selector: task => <label onClick={() => setMemberTaskModal(task)} for="my-modal-4" className="btn modal-button btn-outline btn-success btn-sm">
            DETAILS
          </label>
        },
    ]

    return [assignedTasksColumns]
};

export default useAssignedTasksTable;