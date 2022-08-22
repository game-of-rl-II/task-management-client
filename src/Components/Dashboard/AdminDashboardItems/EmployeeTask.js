import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const EmployeeTask = () => {
  const [date, setDate] = useState(new Date());
  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p>You picked {format(date, 'PP')}.</p>;
  }
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
          footer={footer}/>

          </div>
        </div>
      </div>
      <div >
      <h1 className=" bg-slate-900 w-44 mx-auto py-1 rounded  text-center text-white my-8 font-bold">
        MEMBERS TASK
      </h1>
      <div  className="w-full ">
        <table  className="table w-3/4 mx-auto ">
          <thead>
            <tr>
              <th></th>
              <th className="text-sm font-bold">MEMBER NAME</th>
              <th className="text-sm font-bold">MEMBER ID</th>
              <th className="text-sm font-bold">TASK</th>
           
            </tr>
          </thead>
          <tbody >
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
                  <button className="btn btn-outline btn-success btn-sm">
                   DETAILS
                  </button>
                </th>
               
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