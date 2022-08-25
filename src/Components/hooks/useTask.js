import { useEffect, useState } from "react";

const useTask = () => {
  const [tasks, setTasks] = useState([])

  const member = JSON.parse(localStorage.getItem('member'))
  const id = member.id

  const completedTasks = tasks.filter(task => task?.taskCompletion === true)
  const unCompletedTasks = tasks.filter(task => task?.taskCompletion === !true)
  



  useEffect(() => {
    fetch(`http://localhost:5000/taskMember?id=${id}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));

  }, [id, tasks]);
  return {
    tasks,
    completedTasks,
    unCompletedTasks
  };

};

export default useTask;