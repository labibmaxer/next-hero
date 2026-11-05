import React from 'react';
import { gettasks } from '@/lib/tasks';
import TaskCard from '@/components/TaskCard';
const Taskspage = async () => {
    const tasks = await gettasks();
    return (
        <div>
            <h1>Total task : {tasks.length}</h1>
            <div>
        {
               tasks.map(task => <TaskCard key={task.id} task={task}/>)



        }
                
            </div>
        </div>
    );
};

export default Taskspage;