import { toast } from "react-toastify";

const useNotifyAdmin = () => {
    const handleNotification = ({ message, adminEmail, success, navLink }) => {
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
                    setTimeout(() => {

                        handleArchiveNotification({ message, adminEmail, success, navLink })
                    }, 1000)

                }
            });
    }
    const handleArchiveNotification = ({ message, adminEmail, success , navLink}) => {
        fetch('https://warm-dawn-94442.herokuapp.com/notification-archive-admin', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ message, adminEmail, navLink }),
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.acknowledged) {

                    toast.success(success)

                }
            });
    }

    return [handleNotification]
}
export default useNotifyAdmin;