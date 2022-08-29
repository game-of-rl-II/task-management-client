

const useManageMembers = ({setAssignTaskMember, setDeleteMember}) => {

    const manageMembersColumns = [ 
        {
            name: <h2>Name</h2>,
            selector: member => <h2>{member.name}</h2>
        },
        {
            name: <h2>Member ID</h2>,
            selector: member => <h2>{member.id}</h2>
        },
        {
            name: <h2>Assign task</h2>,
            selector: member => <> <label

            onClick={() => setAssignTaskMember(member)}
            htmlFor="my-modal-6"
            className="btn modal-button btn-outline btn-success btn-sm"
          >
            Assign
          </label>
          
          </>
          
        },
        {
            name: <h2>Delete</h2>,
            selector: member => <>
            {
                    member?.id === '6169176' ? <label>Non removable</label> : <label

                      onClick={() => setDeleteMember(member)}
                      htmlFor="EmployeeDelete-modal"
                      className="btn modal-button btn-outline btn-error  btn-sm"
                    >
                      Delete
                    </label>
                  }

                  
            </>
        },
    ]

   return [manageMembersColumns]
};

export default useManageMembers;