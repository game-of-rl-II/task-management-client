import React from 'react';

const UncompletedTaskModal = ({ taskData, setTaskData }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h1 class="text-lg uppercase text-center font-bold"> Task Details</h1>

          <h3 class="text-lg mt-4 font-bold">Task Assigned: {taskData.name}</h3>
          <p class="text-lg font-bold">Deadline: {taskData.deadline}</p>
          <p class="text-lg font-bold">Status: Pending</p>
          <p class="text-lg font-bold">Task Description: {taskData.task}</p>
          <div className="flex gap-5 justify-end mt-5">
            <button
              onClick={() => setTaskData(null)}
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

export default UncompletedTaskModal;