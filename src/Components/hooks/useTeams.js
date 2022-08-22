import { useEffect, useState } from "react";

const useTeams = (admin) => {
    const email = admin?.email;
    const [teams, setTeams] = useState([])
    if (email) {

        fetch(`http://localhost:5000/teams/${email}`)
            .then(res => res.json())
            .then(data => setTeams(data))
    }



    return {
        teams
    }
}
export default useTeams;