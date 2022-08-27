const useUncompletedTasksTable = ({setTaskData}) => {
    const unCompletedTasksColumns = [
        {
            name: <h2>Assign Date</h2>,
            selector: utc => <h2>{utc.taskDate}</h2>,
        },
        {
            name: <h2>DeadLine</h2>,
            selector: utc => <h2>{utc.deadline}</h2>,
        },
        {
            name: <h2>View Details </h2>,
            selector: utc => <label onClick={() => setTaskData(utc)} for="my-modal-6" className="btn modal-button btn-outline btn-success btn-sm">
            DETAILS
          </label>,
        },
        {
            name: <h2>Forward</h2>,
            selector: utc => <h2><button className="btn btn-outline btn-success btn-sm">
                FORWARD
            </button></h2>,
        },
    ]
    return [unCompletedTasksColumns];
}
export default useUncompletedTasksTable;