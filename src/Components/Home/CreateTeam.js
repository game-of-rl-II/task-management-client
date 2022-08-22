import React from 'react';
import addTeam from '../../Images/addTeam.png'
import MyTeamsModal from '../Dashboard/AdminDashboardItems/MyTeamsModal';
const CreateTeam = () => {
    return (
        <div>
            <h2 className="text-center text-4xl">Create a Team now and Start working together</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '300px', height: '300px' }}>
                    <img style={{ width: '100%', height: '100%' }} src={addTeam} alt="icon"></img>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                        <label for="my-modal" class="btn btn-primary modal-button mb-5">Create a team</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />

            <div class="modal">
                <div class="modal-box">
                    <MyTeamsModal></MyTeamsModal>
                </div>
            </div>
        </div>
    );
};

export default CreateTeam;