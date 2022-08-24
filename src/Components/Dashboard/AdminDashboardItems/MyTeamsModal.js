import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase/firebase.init";
import { toast } from "react-toastify";
import { Alert } from "react-st-modal";
const MyTeamsModal = () => {
  const [admin, adminLoading, adminError] = useAuthState(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const owner = admin?.email;
    const teamName = e.target.teamName.value;
    if (teamName.includes(" ")) {
      return Alert(
        "Please don't use any <space> in team name",
        "Team name not valid"
      );
    }
    const members = e.target.members.value;
    const project = e.target.project.value;
    const teamData = { owner, teamName, members, project };
    fetch("http://localhost:5000/create-team", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(teamData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Team created successfully");
        } else if (data.message) {
          toast.error(`${data.message}`);
        }
      });
  };
  return (
    <>
      <h3 className="font-bold text-lg">Create a team</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Team Name</span>
          </label>
          <input
            required
            type="text"
            placeholder="Team Name"
            className="input input-bordered"
            name="teamName"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Members' Quantity</span>
          </label>
          <input
            required
            type="number"
            placeholder="Member"
            className="input input-bordered"
            name="members"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Project Name</span>
          </label>
          <input
            type="project"
            placeholder="Project"
            className="input input-bordered"
            name="project"
          />
        </div>

        <div class="modal-action">
          <button type="submit" class="btn btn-primary text-white">
            Create
          </button>
          <label for="my-modal" class="btn btn-warning">
            Cancel
          </label>
        </div>
      </form>
    </>
  );
};

export default MyTeamsModal;
