import React from 'react';
import './MyTeams.css'
import MyTeamsModal from './MyTeamsModal';

const MyTeams = () => {

    return (
        <div>
            <h1 className='text-center text-4xl'>My Teams</h1>
            <div className='mt-button-wrapper'>
                <div>

                    <label for="my-modal" class="btn btn-primary modal-button">Create a team</label></div>
            </div>
            {/* modal for creating a team */}
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <MyTeamsModal></MyTeamsModal>
                </div>
            </div>
        </div>
    );
};

export default MyTeams;