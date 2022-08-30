import React from "react";

const ForwardTaskViewMessageModal = ({ forwardTaskViewMessage }) => {
  console.log(forwardTaskViewMessage);
  return (
    <div>
      <label for="forward-task-view-message" class="btn modal-button">
        view message
      </label>

      <input type="checkbox" id="forward-task-view-message" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">{forwardTaskViewMessage?.issue}</h3>

          <div class="modal-action">
            <label for="forward-task-view-message" class="btn bg-teal-500  border-0">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForwardTaskViewMessageModal;
