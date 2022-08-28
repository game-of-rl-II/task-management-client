import { toast } from 'react-toastify';

const useNotifyMember = () => {
    const handleNotificationMember = ({ memberId, message, success }) => {
        fetch('https://warm-dawn-94442.herokuapp.com/notification-member', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ memberId, message }),
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.acknowledged) {
                    setTimeout(() => {

                        handleArchiveNotificationMember({ memberId, message, success })
                    }, 1000)

                }
            });
    }
    const handleArchiveNotificationMember = ({ memberId, message, success }) => {
        fetch('https://warm-dawn-94442.herokuapp.com/notification-archive-member', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ memberId, message, success }),
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.acknowledged) {

                    toast.success(success)

                }
            });
    }


    return [handleNotificationMember]
};

export default useNotifyMember;