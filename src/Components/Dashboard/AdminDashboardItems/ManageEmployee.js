// import React, { useEffect, useState } from 'react';

const ManageEmployee = () => {
    const employees = [
        {
          "_id": "546",
          "name": "Haider Nayeem"
        },
        {
          "_id": "462",
          "name": "Mahmudul Hasan"
        },
        {
          "_id": "646",
          "name": "Jobair Sarkar"
        },
        {
          "_id": "985",
          "name": "Shahid Islam"
        },
        {
          "_id": "975",
          "name": "Saif Emon"
        }
      ]
    // const [employees, setEmployees] = useState([]);
    // useEffect(() => {
    //     fetch('employee.json')
    //     .then(res => res.json())
    //     .then(data => setEmployees(data))
    // }, [])
    return (
        <div >
            <h1 className=" bg-slate-900 w-60 mx-auto py-1 rounded  text-center text-white my-8 font-bold">MANAGE ALL EMPLOYEE</h1>
            <div className="w-full ">
  <table className="table w-3/4 mx-auto ">

    <thead>
      <tr>
        <th></th>
        <th className="text-sm font-bold">EMPLOYEE NAME</th>
        <th className="text-sm font-bold">EMPLOYEE ID</th>
        <th className="text-sm font-bold">ASSIGN TASK</th>
        <th className="text-sm font-bold">DELETE EMPLOYEE</th>

      </tr>
    </thead>
    <tbody>

      {
        employees.map(employee => <tr key={employee._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox checkbox-accent" />
              </label>
            </th>
            <td className=" ">
              {employee.name}
            </td>
            <td className="text-xs font-bold">
             {employee._id}
            </td>

            <th>
              <button className="btn btn-outline btn-success  btn-xs">Assign</button>
            </th>
            <th>
              <button className="btn btn-outline btn-error  btn-xs">Delete</button>
            </th>
          </tr>)
      }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageEmployee;