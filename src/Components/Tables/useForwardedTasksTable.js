const useForwardedTasksTable = () => {
    const forwardedTasksTable = [
        {
            name: <h2>Forwarded By</h2>,
            selector: task => <h2>{task?.name}</h2>
        },
        {
            name: <h2>Assign Date</h2>,
            selector: task => <h2>{task?.taskDate}</h2>
        },
        {
            name: <h2>Deadline</h2>,
            selector: task => <h2>{task?.deadline}</h2>
        },
        {
            name: <h2>Message</h2>,
            selector: task => <h2><button>view message</button></h2>
        },
    ]
    return [forwardedTasksTable]
}
export default useForwardedTasksTable;