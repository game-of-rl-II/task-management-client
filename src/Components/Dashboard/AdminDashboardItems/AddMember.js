import React from "react";
import "./AddMember.css";

const AddMember = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const nickName = e.target.nickName.value;
    const id = e.target.id.value;
    const password = e.target.password.value;
    const phone = e.target.phone.value;
    const position = e.target.position.value;
    const description = e.target.description.value;

    const data = {
      name,
      nickName,
      id,
      password,
      phone,
      position,
      description,
    };
    console.log(data);
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
            alert("member successfully added!");
          }
        });
    }
  };
  return (
    <div className="addMember-form mx-auto">
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input required type="text" placeholder="Password" className="input input-bordered input-addMember-form" name="password" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Position (optional)</span>
            </label>
            <input type="text" placeholder="Position" className="input input-bordered input-addMember-form" name="position" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input required type="number" placeholder="Phone" className="input input-bordered input-addMember-form" name="phone" />
          </div>
        </div>
        <div className="addMember-form-bottom">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description (optional)</span>
            </label>
            <textarea
              required
              type="text"
              placeholder="Add a short description"
              className="input input-bordered textarea-addMember-form"
              name="description"
            />
          </div>
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
