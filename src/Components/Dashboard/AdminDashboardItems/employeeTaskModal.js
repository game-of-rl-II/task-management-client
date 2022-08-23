import React from 'react';

const EmployeeTaskModal = ({ memberTaskModal }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label for="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative shadow-2xl bg-base-100 border-y-4 border-primary" for="" >
                    <h3 className="text-lg font-bold">{memberTaskModal.name}</h3>
                    <p className="py-4">{memberTaskModal.task}</p>
                    <p className="py-4">{memberTaskModal.deadline}</p>
                </label>
            </label>
        </div>
    );
};

export default EmployeeTaskModal;
