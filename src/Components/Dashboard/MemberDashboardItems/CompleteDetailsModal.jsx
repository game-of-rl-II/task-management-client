import React from "react";

const CompleteDetailsModal = ({ detailsModal }) => {
  console.log(detailsModal);
  const { deadline, task, image, name, status } = detailsModal;
  return (
    <div>
      <input type="checkbox" id="details-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label for="details-modal" class="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h1 className="mt-5 text-gray-800 leading-10 text-sm md:text-xl font-bold">Task Deadline: {deadline}</h1>
          <h1 className=" text-gray-800 lg:leading-10 text-sm md:text-xl font-bold">
            Task Status: <span className="uppercase text-success">{status}</span>
          </h1>
          <h1 className="mt-2 text-gray-800 lg:leading-10 text-sm md:text-xl font-bold">Assigned Task: {task}</h1>
        </div>
      </div>
    </div>
  );
};

export default CompleteDetailsModal;
