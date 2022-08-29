import React, { useState } from "react";
import { toast } from "react-toastify";
import useUncompletedTasksTable from "../../Tables/useUnCompletedTasksTable";

const ForwordTaskModal = ({ taskForword, setTaskForword }) => {
  const [issue, setIssue] = useState("");
  const handleForward = (task) => {
    const data = { ...task, issue };
    console.log(data);
    if (data) {
      fetch("http://localhost:5000/forwardedTasksCollection", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTaskForword(null);
        });
    }
    // console.log(data);

    // fetch("http://localhost:5000/forwardedTasksCollection", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //
    //   });
  };
  // const [unCompletedTasksColumns] = useUncompletedTasksTable({ handleForward });
  return (
    <div>
      <input type="checkbox" id="forword-task-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Why are you forwarding?</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Issue</span>
            </label>
            <input type="text" onBlur={(e) => setIssue(e.target.value)} required placeholder="Issue" className="input input-bordered" name="issue" />
          </div>
          <div class="modal-action">
            <button type="button" onClick={() => handleForward(taskForword)} class="btn bg-teal-500 text-white">
              Submit
            </button>
            <label for="forword-task-modal" class="btn btn-warning">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForwordTaskModal;
