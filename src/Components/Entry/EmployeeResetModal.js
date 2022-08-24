import React from 'react';
import { toast } from "react-toastify";

const EmployeeResetModal = () => {

    const handleReset = (event) => {
        event.preventDefault();
        const userId = event.target.userId.value;
        const adminEmail = event.target.adminEmail.value;


        const forReset = {
            userId,
            adminEmail,
        };
        // console.log(forReset);

        const url = "http://localhost:5000/notification-admin";
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(forReset),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast("Your admin will contact you");
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