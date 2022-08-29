import React from "react";

const ForwordTaskModal = () => {
  const handleSubmit = (e) => {
    console.log("object");
  };
  return (
    <div>
      <label for="forword-task-modal" class="btn modal-button">
        open modal
      </label>

      <form onSubmit={handleSubmit}>
        <input type="checkbox" id="forword-task-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Issue</span>
              </label>
              <input type="project" placeholder="Issue" className="input input-bordered" name="issue" />
            </div>
            <div class="modal-action">
              <button type="submit" class="btn btn-primary text-white">
                Submit
              </button>
              <label for="my-modal" class="btn btn-warning">
                Cancel
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForwordTaskModal;
