import React from 'react';

const TaskModal = ({modalData, setModalData}) => {
  
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box relative">
                      <h1 className="text-lg uppercase text-center font-bold"> Task Details</h1>
                     
                      
                     
                      <p className="text-lg font-bold">
                       {modalData.task}
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