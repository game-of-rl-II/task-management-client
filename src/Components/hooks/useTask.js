import { useEffect, useState } from "react"

const useTask = () => {
    const [tasks, setTasks] = useState([])
    
    const member = JSON.parse(localStorage.getItem('member'))
    const   id = member.id

    
    useEffect(() => {
        fetch(`http://localhost:5000/taskMember?id=${id}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])
    return [tasks, setTasks]
}

export default useTask;