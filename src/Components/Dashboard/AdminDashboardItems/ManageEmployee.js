import AssignTaskModal from "./AssignTaskModal";
import EmployeeDeleteModal from "./EmployeeDeleteModal";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase/firebase.init";
import { useQuery } from "react-query";
import useTeamName from "../../hooks/useTeamName";
import DataTable, { createTheme } from 'react-data-table-component'

import Loading from "../../Shared/Loading/Loading";
import useManageMembers from "../../Tables/useManageMembers";

const ManageEmployee = () => {
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const email = admin?.email;
  const [deleteMember, setDeleteMember] = useState(null);
  const [assignTaskMember, setAssignTaskMember] = useState(null);
  const { teamName } = useTeamName();

  const {
    data: members,
    refetch,
    isLoading,
  } = useQuery(["owner", email], () =>
    fetch(`https://warm-dawn-94442.herokuapp.com/members?email=${email}&teamName=${teamName}`, {
      method: "GET",
    }).then((res) => res.json())
  );

  const [manageMembersColumns] = useManageMembers({ setAssignTaskMember, setDeleteMember })

  // createTheme('solarized', {
  //   text: {
  //     primary: '#029743',
  //     secondary: '#2aa198',
  //   },
  //   background: {
  //     default: '#F7FEE7',
  //   },
  //   context: {
  //     background: '#029743',
  //     text: '#E2E8F0',
  //   },
  //   divider: {
  //     default: '#E2E8F0',
  //   },

  // }, 'dark');

  if (adminLoading || isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className=" bg-secondary w-52 mx-auto py-1 rounded  text-center text-white my-8 font-bold">
        MANAGE ALL MEMBER
      </h1>
      <div className="mx-5">

        <DataTable columns={manageMembersColumns} data={members}></DataTable>
      </div>
      {assignTaskMember && (
        <AssignTaskModal
          assignTaskMember={assignTaskMember}
          setAssignTaskMember={setAssignTaskMember}
        />
      )}
      {deleteMember && (
        <EmployeeDeleteModal
          refetch={refetch}
          deleteMember={deleteMember}
        />
      )}
    </div>
  );
};

export default ManageEmployee;
