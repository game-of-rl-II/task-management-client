import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import getForwardedTasks from '../../../ReduxServices/actoions/ForwardedTasksAction';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../../Firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading';
import useForwardedTasksTable from '../../Tables/useForwardedTasksTable';
import DataTable from 'react-data-table-component';


const ForwardedTasks = () => {
    const [admin, adminLoading, AdminError] = useAuthState(auth)
    const email = admin?.email;
    const { isLoading, data, error } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getForwardedTasks(email));
    }, [dispatch, email]);

    const [forwardedTasksTable] = useForwardedTasksTable()

    if (isLoading || adminLoading) {
        return <Loading></Loading>;
    }
    if (error) {
        alert(error.message);
    }
    return (
        <div className="mx-5">
            <DataTable columns={forwardedTasksTable} data={data}></DataTable>
        </div>
    );
};

export default ForwardedTasks;