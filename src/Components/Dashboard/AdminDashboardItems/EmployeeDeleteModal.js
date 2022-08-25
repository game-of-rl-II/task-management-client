import React from "react";
import { toast } from "react-toastify";

const EmployeeDeleteModal = ({ deleteMember, refetch }) => {
  const { _id } = deleteMember;

  const handleDeleteMember = (id) => {
    fetch(`https://warm-dawn-94442.herokuapp.com/member/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          if (data.acknowledged) {
            refetch();
            toast.success("This member is deleted successfully!");
          }
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="EmployeeDelete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box bg-white border-y-4 border-primary">
          <h3 class="font-bold text-lg">
            Are you sure? Do you want to delete this member?
          </h3>
          <p class="py-4"></p>
          <div class="modal-action">
            <label
              for="EmployeeDelete-modal"
              class="btn btn-warning btn-sm px-5"
            >
              CANCEL
            </label>
            <label
              onClick={() => handleDeleteMember(_id)}
              for="EmployeeDelete-modal"
              class="btn btn-error text-white btn-sm px-5"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDeleteModal;
