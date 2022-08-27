import { toast } from "react-toastify";

const useNotifyAdmin = () => {
    const handleNotification = ({ message, adminEmail, success }) => {
        fetch('https://warm-dawn-94442.herokuapp.com/notification-admin', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ message, adminEmail }),
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.acknowledged) {
                    toast(success);

                }
            });
    }

    return [handleNotification]
}
export default useNotifyAdmin;