const express = require('express'); 
const router = express.Router();
const workoutController = require('../../controllers/workoutController');

router.get('/', workoutController.getAllWorkout);

router.get('/:Id', workoutController.getOneWorkout);

router.post('/', workoutController.createNewWorkout);

router.patch('/:Id', workoutController.updateWorkout); 

router.delete('/:Id', workoutController.deleteWorkout);

module.exports = router;