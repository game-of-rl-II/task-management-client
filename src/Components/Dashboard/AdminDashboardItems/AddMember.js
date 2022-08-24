import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "./AddMember.css";

const AddMember = () => {
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const [generatedID, setGeneratedID] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const adminEmail = admin?.email;
    const name = e.target.name.value;
    const memberEmail = e.target.email.value;
    const id = e.target.id.value;
    const password = e.target.password.value;

    const data = {
      adminEmail,
      name,
      memberEmail,
      id,
      password,
    };
    if (data) {
      fetch("http://localhost:5000/add-new-member", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {

          if (data.acknowledged) {
            // console.log(data)

            toast.success("Member added successfully!");
          } else {
            toast.error(`${data.message}`);

          }
         
        });
       
    }

    if (adminLoading) {
      return <Loading/>
    }
  };

  // handle id check al alamin arif start
  const handleIdCheck = (randomId) => {

    fetch(`http://localhost:5000/random-id-check/${randomId}`)
      .then((res) => res.json())
      .then((data) => {
        if(data.message){
          return handleIdCheck(randomId)
        }
        else if(data.memberId){
          setGeneratedID(data.memberId)
        }
      });
  };
  const handleGenerate = () => {
    const randomId = Math.floor(10000 + Math.random() * 9000000);

    handleIdCheck(randomId);
  };

  
  //   const setId = e.target.value;
  //   setGenerateID(setId);
  // };
  // handle id check al alamin arif end
  return (
    <div className="addMember-form">
      <form onSubmit={handleSubmit}>
        <div className="my-10 addMember-form-top">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input required type="text" placeholder="Name" className="input input-bordered input-addMember-form" name="name" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input required type="email" placeholder="Email" className="input input-bordered input-addMember-form" name="email" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">ID</span>
            </label>
            <input
              required
              type="number"
              placeholder="ID"
              className="input input-bordered input-addMember-form"
              defaultValue={generatedID}
              name="id"
            />

            <button type="button" onClick={handleGenerate} className="btn btn-primary text-white mt-3">
              Generate an ID
            </button>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input required type="text" placeholder="Password" className="input input-bordered input-addMember-form" name="password" />
          </div>
        </div>
        <div className="addMember-form-bottom">
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMember;
