import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
// import useTask from '../../hooks/useTask';
const EmployeeTask = () => {
  const [date, setDate] = useState(new Date());
  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p>You picked {format(date, 'PP')}.</p>;
  }

  const [memberTask, SetMemberTask] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/task')
      .then((res) => res.json())
      .then((data) => SetMemberTask(data));
  }, [])

  let newDate = <p>{format(date, "PP")}</p>;
  const todaysDate = newDate.props.children;
  const [taskDate, setTaskDate] = useState('')

  console.log(todaysDate, taskDate);


  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://placeimg.com/260/400/arch" className="max-w-sm lg:ml-32 rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              footer={footer} />

          </div>
        </div>
      </div>
      <div >
        <h1 className=" bg-secondary w-44 mx-auto py-1 rounded  text-center text-white my-8 font-bold">
          MEMBERS TASK
        </h1>
        <div className="w-full ">
          <table className="table w-3/4 mx-auto ">
            <thead>
              <tr>
                <th></th>
                <th className="text-sm font-bold">MEMBER NAME</th>
                <th className="text-sm font-bold">MEMBER ID</th>
                <th className="text-sm font-bold">DATE</th>
                <th className="text-sm font-bold">TASK</th>

              </tr>
            </thead>
            <tbody >
              {memberTask.map((member, index) => (
                <tr key={member._id}>
                  <th>
                    {index + 1}
                  </th>
                  {/* <>{setTaskDate(member.exactDate)}</> */}
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
                  <td className="text-xs font-bold">{member.memberId}</td>
                 
                  <td className="text-xs font-bold">{member.exactDate}</td>
                  
                  <td>
                    <button className="btn btn-outline btn-success btn-sm">
                      DETAILS
                    </button>
                  </td>

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