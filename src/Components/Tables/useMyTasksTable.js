const useMyTasksTable = ({ handleUpdateTaskStatus, setModalData }) => {
  const myTasksColumns = [
    {
      name: <h1>Assigned Date</h1>,
      selector: task => <h1>{task.taskDate}</h1>
    },
    {
      name: <h1>TaskDate</h1>,
      selector: task => <h1>{task.taskCompletion ? 'Done' : "pending"}</h1>
    },
    {
      name: <h1>Task Deadline</h1>,
      selector: task => <h1>{task.deadline}</h1>
    },
    {
      name: 'Update',
      selector: task => <button
        onClick={() => handleUpdateTaskStatus(task)}
        disabled={task.taskCompletion === true}
        className="btn btn-outline btn-primary btn-sm"
      >
        UPDATE
      </button>
    },
    {
      name: 'View Task',
      selector: task => <label
        onClick={() => setModalData(task)}
        for="my-modal-3"
        className="btn btn-outline btn-info btn-sm modal-button"
      >
        View Task
      </label>
    },

  ]
  return [myTasksColumns]
}
export default useMyTasksTable;