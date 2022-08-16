// import React, { useEffect, useState } from 'react';

import AssignTaskModal from "./AssignTaskModal";
import EmployeeDeleteModal from "./EmployeeDeleteModal";

const ManageEmployee = () => {
  const members = [
    {
      _id: "546",
      name: "Haider Nayeem",
      image: "https://placeimg.com/192/192/people",
    },
    {
      _id: "462",
      name: "Mahmudul Hasan",
      image: "https://placeimg.com/192/192/people",
    },
    {
      _id: "646",
      name: "Jobair Sarkar",
      image: "https://placeimg.com/192/192/people",
    },
    {
      _id: "985",
      name: "Shahid Islam",
      image: "https://placeimg.com/192/192/people",
    },
    {
      _id: "975",
      name: "Saif Emon",
      image: "https://placeimg.com/192/192/people",
    },
  ];
  // const [employees, setEmployees] = useState([]);
  // useEffect(() => {
  //     fetch('employee.json')
  //     .then(res => res.json())
  //     .then(data => setEmployees(data))
  // }, [])
  return (
    <div>
      <h1 className=" bg-slate-900 w-52 mx-auto py-1 rounded  text-center text-white my-8 font-bold">
        MANAGE ALL MEMBER
      </h1>
      <div className="w-full ">
        <table className="table w-3/4 mx-auto ">
          <thead>
            <tr>
              <th></th>
              <th className="text-sm font-bold">MEMBER NAME</th>
              <th className="text-sm font-bold">MEMBER ID</th>
              <th className="text-sm font-bold">NEW TASK</th>
              <th className="text-sm font-bold">DELETE MEMBER</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member , index) => (
              <tr key={member._id}>
                <th>
                  {index + 1}

                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-14 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={member.image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{member.name}</div>
                      
                    </div>
                  </div>
                </td>

                <td className="text-xs font-bold">{member._id}</td>

                <th>
                  <label for="my-modal-6" class="btn modal-button btn-outline btn-success btn-sm">Assign</label>
                  <AssignTaskModal />
                </th>
                <th>
                  
                  <label for="EmployeeDelete-modal" class="btn modal-button btn-outline btn-error  btn-sm">Delete</label>
                  <EmployeeDeleteModal />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEmployee;
