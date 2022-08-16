// import React, { useEffect, useState } from 'react';

const ManageAttendance = () => {
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
    //     .then(res => res.json)
    //     .then(data => {
    //         console.log('employee data' , data);
    //     })
    // }, [])
    return (
 
             <div >
      <h1 className=" bg-slate-900 w-72 mx-auto py-1 rounded  text-center text-white my-8 font-bold">
        MANAGE MEMBERS ATTENDANCE
      </h1>
      <div  className="w-full ">
        <table  className="table w-3/4 mx-auto ">
          <thead>
            <tr>
              <th></th>
              <th className="text-sm font-bold">MEMBER NAME</th>
              <th className="text-sm font-bold">MEMBER ID</th>
              <th className="text-sm font-bold">ATTENDANCE</th>
           
            </tr>
          </thead>
          <tbody >
            {members.map((member , index) => (
              <tr key={member._id}>
                <th>
                  {index + 1}

                </th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="w-14 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={member.image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{member.name}</div>
                      
                    </div>
                  </div>
                </td>

                <td className="text-xs font-bold">{member._id}</td>

                <th>
                  <button className="btn btn-outline btn-success btn-sm">
                    PRESENT
                  </button>
                </th>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
            
        
    );
};

export default ManageAttendance;