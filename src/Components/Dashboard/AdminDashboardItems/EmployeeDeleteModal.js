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
      <input
        type="checkbox"
        id="EmployeeDelete-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-gradient-to-t from-pink-500 to-orange-400 border-y-4 border-white">
          <h3 className="font-bold text-lg">
            Are you sure? Do you want to delete this member?
          </h3>
          <p className="py-4"></p>
          <div className="modal-action">
            <label
              for="EmployeeDelete-modal"
              className="btn btn-warning btn-sm px-5"
            >
              CANCEL
            </label>
            <label
              onClick={() => handleDeleteMember(_id)}
              for="EmployeeDelete-modal"
              className="btn btn-error text-white btn-sm px-5"
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
