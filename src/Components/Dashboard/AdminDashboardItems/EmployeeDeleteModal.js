import React from 'react';

const EmployeeDeleteModal = () => {
    return (
        <div>
            <input type="checkbox" id="EmployeeDelete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p class="py-4">Are you sure? You want to Delete?</p>
                    <div class="modal-action">
                        <label for="EmployeeDelete-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDeleteModal;