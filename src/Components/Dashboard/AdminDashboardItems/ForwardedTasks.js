import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import getForwardedTasks from '../../../ReduxServices/actoions/ForwardedTasksAction';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../../Firebase/firebase.init';


const ForwardedTasks = () => {
    const [admin, adminLoading, AdminError] = useAuthState(auth)
    const { isLoading, data, error } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getForwardedTasks());
    }, [dispatch]);
    if (isLoading) {
        return <p>...</p>;
    }
    if (error) {
        alert(error.message);
    }
    return (
        <div className="text-center mt-5">
            <h1>{data?.length}</h1>
        </div>
    );
};

export default ForwardedTasks;