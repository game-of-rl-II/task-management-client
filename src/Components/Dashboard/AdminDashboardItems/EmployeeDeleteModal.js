import React from "react";
import { toast } from "react-toastify";

const EmployeeDeleteModal = ({ deleteMember }) => {
  const { _id } = deleteMember;

  const handleDeleteMember = (id) => {
    fetch(`http://localhost:5000/member/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success("Deleted Member");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="EmployeeDelete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-gradient-to-t from-pink-500 to-orange-400 border-y-4 border-white">
          <h3 className="font-bold text-lg">Are you sure? Do you want to delete this member?</h3>
          <p className="py-4"></p>
          <div className="modal-action">
            <label for="EmployeeDelete-modal" className="btn btn-success btn-sm px-5">
              CANCEL
            </label>
            <label onClick={() => handleDeleteMember(_id)} for="EmployeeDelete-modal" className="btn bg-white border-0 btn-sm text-red-600 px-5">
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDeleteModal;
