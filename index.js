const express = require('express');
const userRouter = require('./user.js');
const courseRouter = require('./course.js');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/user',userRouter);
app.use('/course',courseRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
