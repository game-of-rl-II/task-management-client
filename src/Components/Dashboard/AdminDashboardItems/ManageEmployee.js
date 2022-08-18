import AssignTaskModal from "./AssignTaskModal";
import EmployeeDeleteModal from "./EmployeeDeleteModal";
import useTask from '../../hooks/useTask';
import { useEffect, useState } from "react";

const ManageEmployee = () => {
  const [deleteMember, setDeleteMember] = useState(null);
  const [assignTaskMember, setAssignTaskMember] = useState(null);
  const [members, setMembers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/members')
      .then(res => res.json())
      .then(data => setMembers(data))
  }, [members])


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
            {members.map((member, index) => (
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
                  <label onClick={() => setAssignTaskMember(member)} for="my-modal-6" class="btn modal-button btn-outline btn-success btn-sm">Assign</label>
                  {assignTaskMember && (
                    <AssignTaskModal assignTaskMember={assignTaskMember}
                      setAssignTaskMember={setAssignTaskMember}
                    />
                  )}
                </th>
                <th>
                  <label onClick={() => setDeleteMember(member)} for="EmployeeDelete-modal" class="btn modal-button btn-outline btn-error  btn-sm">Delete</label>
                  {deleteMember &&
                    <EmployeeDeleteModal deleteMember={deleteMember} />
                  }
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
