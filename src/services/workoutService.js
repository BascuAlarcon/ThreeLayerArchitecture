const Workout = require('../database/Workout');
const { v4: uuid } = require('uuid');

const getAllWorkout = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
}
const getOneWorkout = () => {
    return;
}

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString('en-US', { timezone: 'UTC'}),
        createdAt: new Date().toLocaleString('en-US', { timezone: 'UTC'})
    }

    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
}
const updateWorkout = () => {
    return;
}
const deleteWorkout = () => {
    return;
}

module.exports = {
    getAllWorkout,
    createNewWorkout
}