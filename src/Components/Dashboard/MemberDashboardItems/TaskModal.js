import React from 'react';

const TaskModal = ({modalData, setModalData}) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box relative">
                      <h1 class="text-lg uppercase text-center font-bold"> Task Details</h1>
                     
                      <h3 class="text-lg mt-4 font-bold">
                       Task Assigned: {modalData.name}
                      </h3>
                      <p class="text-lg font-bold">
                       Deadline: {modalData.deadline}
                      </p>
                      <p class="text-lg font-bold">
                        Status: {modalData.status}
                      </p>
                      <p class="text-lg font-bold">
                       Task Description: {modalData.task}
                      </p>
                      <div className="flex gap-5 justify-end mt-5">
                        <button
                            onClick={() => setModalData(null)}
                            className="btn btn-outline btn-error btn-sm"
                        >
                            Close
                        </button>
                    </div>
                    </div>
                  </div>
        </div>
    );
};

export default TaskModal;