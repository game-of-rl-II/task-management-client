import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import getForwardedTasks from "../../../ReduxServices/actoions/ForwardedTasksAction";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";
import useForwardedTasksTable from "../../Tables/useForwardedTasksTable";
import DataTable from "react-data-table-component";
import useTeamName from "../../hooks/useTeamName";
import ForwardTaskViewMessageModal from "./ForwardTaskViewMessageModal";

const ForwardedTasks = () => {
  // const [admin, adminLoading, AdminError] = useAuthState(auth);
  const { teamName } = useTeamName();
  const [forwardTaskViewMessage, setForwardTaskViewMessage] = useState(null);
  
  // const email = admin?.email;
  const { isLoading, data, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (teamName) {
      dispatch(getForwardedTasks(teamName));
    }
  }, [dispatch, teamName]);

  const [forwardedTasksTable] = useForwardedTasksTable({ setForwardTaskViewMessage });

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (error) {
    // alert(error.message);
  }
  return (
    <div>
      <div className="mx-auto lg:flex lg:max-w-3xl xl:max-w-5xl">
        <DataTable columns={forwardedTasksTable} data={data}></DataTable>
      </div>

      {/* message modal */}
      {forwardTaskViewMessage && (
        <ForwardTaskViewMessageModal forwardTaskViewMessage={forwardTaskViewMessage} setForwardTaskViewMessage={setForwardTaskViewMessage} />
      )}
    </div>
  );
};

export default ForwardedTasks;
