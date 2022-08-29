const useNotificationsTable = () => {
    const notificationsTableColumns = [
        {
            name: <h2>Notifications</h2>,
            selector: ntc => <p>{ntc?.message}</p>
        }
    ]
    return [notificationsTableColumns];

}
export default useNotificationsTable;