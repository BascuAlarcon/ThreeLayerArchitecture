const express = require('express');
const v1WorkoutRouter = require('./v1/routes/workouts');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1/workouts', v1WorkoutRouter);
// app.use('/api/v2', v2Router);

app.listen(PORT, () => {console.log(`Server listening on PORT ${PORT}`)})