import React from 'react';
import { toast } from "react-toastify";
import useNotifyAdmin from '../hooks/useNotifyAdmin';

const EmployeeResetModal = () => {
    const [handleNotification] = useNotifyAdmin()

    const handleReset = (event) => {
        event.preventDefault();

        const message = 'one of your team mates forgot his password'
        const success = 'Your admin will contact you'

        const userId = event.target.userId.value;
        const adminEmail = event.target.adminEmail.value;


        const forReset = {
            userId,
            adminEmail,
            message
        };

        // console.log(forReset);

        const url = "https://warm-dawn-94442.herokuapp.com/notification-archive-admin";

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(forReset),
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.acknowledged) {

                    handleNotification({ message, adminEmail, success })

                }
            });

    }


    return (
        <div>
            <input type="checkbox" id="employeeResetModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box bg-white border-y-4 border-primary">
                    <form onSubmit={handleReset}>
                        <div className="mb-8">
                            <div className="md:flex-1 mt-2 mb:mt-0 ">
                                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold p-2">
                                    REQUEST FOR RESET PASSWORD
                                </label>
                                <input
                                    required
                                    name="userId"
                                    className="w-full shadow-inner p-4 border-0 rounded-xl mb-5 outline-green-500"
                                    placeholder=" Enter Your Id"
                                ></input>
                                <input
                                    required
                                    name="adminEmail"
                                    className="w-full shadow-inner p-4 border-0 rounded-xl mb-5 outline-green-500"
                                    placeholder=" Enter Your Admin Email"
                                ></input>
                            </div>
                        </div>
                        <div class="modal-action">
                            <label for="employeeResetModal" class="btn btn-warning btn-sm px-5">
                                CANCEL
                            </label>
                            <button
                                for="employeeResetModal"
                                type="submit"
                                class="btn btn-primary text-white btn-sm px-5"
                            >
                                Assign
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeResetModal;