import useTask from "../hooks/useTask";

const useCompletedTasksTable = (setDetailsModal) =>{
    

    const completedTasksColumns = [
        {
            name: <h2>Assign Date</h2>,
            // here ct refers to each completed task
            selector: ct => <h2>{ct.taskDate}</h2>
        },
        {
            name: <h2>Deadline</h2>,
            selector: ct => <h2>{ct.deadline}</h2>
        },
        {
            name: <h2>Finish Date</h2>,
            selector: ct => <h2>{ct.taskDate}</h2>
        },
        
        {
            name: <h2>Task</h2>,
            selector: ct => <label for="details-modal" className="btn modal-button btn-outline btn-success btn-sm" onClick={() => setDetailsModal(ct)}>
            DETAILS
          </label>
        },
    ]
    return [completedTasksColumns]
}
export default useCompletedTasksTable;