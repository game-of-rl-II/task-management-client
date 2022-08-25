import React from 'react';
import addTeam from '../../Images/addTeam.png'
import MyTeamsModal from '../Dashboard/AdminDashboardItems/MyTeamsModal';
import { SiMicrosoftteams } from "react-icons/si";
const CreateTeam = () => {
    return (
        <div>
            <h2 className="text-center text-4xl text-primary uppercase">Create a Team now and Start working together</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '300px', height: '300px' }}>
                    <SiMicrosoftteams size={"100%"} style={{color: "#84cc16"}} />
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                        <label for="my-modal" class="btn btn-primary modal-button mb-5 text-white">Create a team</label>
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