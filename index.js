const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Abhishek ! This is your Node.js apps!');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

