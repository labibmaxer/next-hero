import data from '../data/tasks.json';

export const gettasks = async () => {
    return data.tasks;
};