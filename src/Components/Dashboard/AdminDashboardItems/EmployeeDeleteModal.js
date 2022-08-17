import React from 'react';

const EmployeeDeleteModal = () => {
    return (
        <div>
            <input type="checkbox" id="EmployeeDelete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box bg-gradient-to-t from-pink-500 to-orange-400 border-y-4 border-white">
                    <h3 class="font-bold text-lg">Are you sure? You want to Delete?</h3>
                    <p class="py-4"></p>
                    <div class="modal-action">
                        <label for="EmployeeDelete-modal" class="btn btn-success btn-sm px-5">CANCEL</label>
                        <label for="EmployeeDelete-modal" class="btn bg-white border-0 btn-sm text-red-600 px-5">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDeleteModal;