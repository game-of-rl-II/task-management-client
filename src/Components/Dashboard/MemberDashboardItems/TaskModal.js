import React from 'react';

const TaskModal = ({modalData, setModalData}) => {
  
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box relative">
                      <h1 className="text-lg uppercase text-center font-bold"> Task Details</h1>
                     
                      <h3 className="text-lg mt-4 font-bold">
                       Task Assigned: {modalData.name}
                      </h3>
                      <p className="text-lg font-bold">
                       Deadline: {modalData.deadline}
                      </p>
                     
                      <p className="text-lg font-bold">
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