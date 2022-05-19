import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowTask from './ShowTask';

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [tasks])
  return (
    <div className='grid grid-cols-2 gap-5'>
      {
        tasks.map(task => <ShowTask
          key={task._id}
          task={task}
        ></ShowTask>)
      }

    </div>
  );
};

export default TasksList;