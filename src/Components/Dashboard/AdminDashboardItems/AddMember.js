import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase/firebase.init";
import "./AddMember.css";

const AddMember = () => {
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const adminEmail = admin?.email;
    const name = e.target.name.value;
    const nickName = e.target.nickName.value;
    const id = e.target.id.value;
    const password = e.target.password.value;


    const data = {
      adminEmail,
      name,
      nickName,
      id,
      password,

    };
    // console.log(data);
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
          console.log(data)
          if (data.acknowledged) {
            // console.log(data)
            alert("member successfully added!");
          }
          else{
            alert(`${data.message}`)
          }
        });
    }

    if (adminLoading) {
      return <p>Loading...</p>;
    }
  };
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
              <span className="label-text">Nickname</span>
            </label>
            <input required type="text" placeholder="Nickname" className="input input-bordered input-addMember-form" name="nickName" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">ID</span>
            </label>
            <input required type="number" placeholder="ID" className="input input-bordered input-addMember-form" name="id" />
            <button type='button' className="btn btn-primary text-white mt-3">Generate an ID</button>
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
