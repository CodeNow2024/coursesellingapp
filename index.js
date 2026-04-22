const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/signup', (req, res) => {
});
app.post('/login', (req, res) => {
});
app.get('/purchasecourse', (req, res) => {
  res.send('Hello, World!');
});
app.get('/seecourse', (req, res) => {
  res.send('Hello, World!');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
