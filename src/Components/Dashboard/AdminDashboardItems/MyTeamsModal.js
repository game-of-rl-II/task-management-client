import React from 'react';

const MyTeamsModal = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const teamName = e.target.teamName.value;
        const members = e.target.members.value;
        const project = e.target.project.value;
        const teamData = { teamName, members, project, };
        fetch('http://localhost:5000/create-team', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(teamData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('team created')
                }
            })
    }
    return (
        <>
            <h3 class="font-bold text-lg">Create a team</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Team Name</span>
                    </label>
                    <input required type="text" placeholder="Name" className="input input-bordered" name="teamName" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Members' Quantity</span>
                    </label>
                    <input required type="number" placeholder="Name" className="input input-bordered" name="members" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Project Name</span>
                    </label>
                    <input type="project" placeholder="Name" className="input input-bordered" name="project" />
                </div>

                <div class="modal-action">
                    <button type='submit' class="btn btn-primary">Create</button>
                    <label for="my-modal" class="btn">Cancel</label>
                </div>

            </form>

        </>
    );
};

export default MyTeamsModal;