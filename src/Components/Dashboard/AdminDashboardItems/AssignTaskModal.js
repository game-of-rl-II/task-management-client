import React from 'react';
import { toast } from 'react-toastify';

const AssignTaskModal = ({ assignTaskMember, setAssignTaskMember }) => {

    const handleAssignTask = (event) => {
        event.preventDefault();
        const name = assignTaskMember.name;
        const memberId = assignTaskMember.id;
        const task = event.target.task.value;
        const deadline = event.target.deadline.value;


        const taskCompletion = false
        const assignTask = { name, memberId, task, deadline, taskCompletion }

        const url = 'http://localhost:5000/assign-task'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    toast.success('Assign Task has been done successfully');
                }
            })

    };

    return (
      <div>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box bg-white border-y-4 border-primary">
            <p class="py-4 text-charcoal-darker">
              Employee Name: {assignTaskMember.name}
            </p>
            <p class="py-4 text-charcoal-darker">
              Employee ID: {assignTaskMember._id}
            </p>
            <form onSubmit={handleAssignTask}>
              <div className="mb-8">
                <div className="md:flex-1 mt-2 mb:mt-0 ">
                  <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold p-2">
                    ASSIGNED TASK DETAILS
                  </label>
                  <textarea
                    name="task"
                    className="w-full shadow-inner p-2 border-primary border-0 rounded-xl"
                    placeholder=" Enter Assign Task Details..."
                  ></textarea>
                </div>
                <div className="flex justify-end mt-2 mb:mt-0 md:px-3">
                  <div className="md:flex w-full mb-4">
                    <div className="md:flex-1 md:pr-3 mb-4 md:mb-0">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold p-2">
                        SET A DEADLINE
                      </label>

                      <select
                        name="deadline"
                        className="select  w-full max-w-xs"
                      >
                        <option>5 Day</option>
                        <option>4 Day</option>
                        <option>3 Day</option>
                        <option>2 Day</option>
                        <option>1 Day</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-action">
                <label for="my-modal-6" class="btn btn-warning btn-sm px-5">
                  CANCEL
                </label>
                <button
                  for="my-modal-6"
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

export default AssignTaskModal;