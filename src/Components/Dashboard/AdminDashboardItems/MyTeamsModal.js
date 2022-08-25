import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase/firebase.init";
import { toast } from "react-toastify";
import { Alert } from "react-st-modal";
import {  TwitterPicker } from "react-color";
const MyTeamsModal = () => {
  const [color, setColor] = useState({hex: '#000000.'})
  
  const [admin, adminLoading, adminError] = useAuthState(auth);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const owner = admin?.email;
    const teamName = e.target.teamName.value;
    if (teamName.includes(" ")) {
      return Alert(
        "Please don't use any <space> in the team name",
        "Team name not valid"
      );
    }
    if (teamName.length >= 16) {
      return Alert("Please keep your team name shorter than 16 characters", "Team name not valid")
    }
    const members = e.target.members.value;
    const project = e.target.project.value;
    const teamColor = color?.hex;
    const teamData = { owner, teamName, members, project, teamColor };
    fetch("https://warm-dawn-94442.herokuapp.com/create-team", {
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
      <form className="" onSubmit={handleSubmit}>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Choose a theme (You can change it later)</span>
          </label>
          <TwitterPicker color={color} onChange={newColor => setColor(newColor)}></TwitterPicker>
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
