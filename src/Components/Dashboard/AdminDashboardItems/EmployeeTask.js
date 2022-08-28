import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import useTeamName from "../../hooks/useTeamName";
import EmployeeTaskModalNew from "./EmployeeTaskModalNew";
// import useTask from '../../hooks/useTask';
const EmployeeTask = () => {
  const [memberTaskModal, setMemberTaskModal] = useState(null);

  const [date, setDate] = useState(new Date());
  const { teamName } = useTeamName();
  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p>You picked {format(date, "PP")}.</p>;
  }

  const [memberTask, setMemberTask] = useState([]);
  // console.log(memberTask);
  useEffect(() => {
    if (teamName) {
      fetch(`https://warm-dawn-94442.herokuapp.com/task/${teamName}`)
        .then((res) => res.json())
        .then((data) => {
          setMemberTask(data);
          console.log(data);
        });
    }
  }, [memberTask, teamName]);

  let newDate = <p>{format(date, "PP")}</p>;
  const todaysDate = newDate.props.children;
  // const [taskDate, setTaskDate] = useState('')

  return (
    <div>
      <div>
        <h1 className=" bg-teal-500 w-40 mx-auto py-1 rounded  text-center text-white my-6 font-bold">MEMBERS TASK</h1>
        <div className="w-full ">
          <table className="table w-3/5 mx-auto ">
            <thead>
              <tr>
                <th></th>
                <th className="text-sm font-bold">MEMBER NAME</th>
                <th className="text-sm font-bold">MEMBER ID</th>
                <th className="text-sm font-bold">DATE</th>
                <th className="text-sm font-bold">TASK</th>
              </tr>
            </thead>
            <tbody>
              {memberTask.map((member, index) => (
                <tr key={member._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-14 mr-4 rounded-full ring ring-teal-500 ring-offset-base-100 ring-offset-2">
                          <img src={member.image} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{member.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-xs font-bold">{member.memberId}</td>

                  <td className="text-xs font-bold">
                    <span className={member.taskDate === todaysDate ? "text-teal-500" : "text-black"}>{member.taskDate}</span>
                  </td>

                  <td>
                    <label onClick={() => setMemberTaskModal(member)} for="my-modal-4" className="btn modal-button bg-teal-500 hover:bg-teal-700 text-white border-none btn-sm">
                      DETAILS
                    </label>
                  </td>
                  {memberTaskModal && <EmployeeTaskModalNew memberTaskModal={memberTaskModal} />}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTask;
