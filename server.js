// server.js
const express = require('express');
const app = express();

// ROUTE for "/"
app.get('/', (req, res) => {
  res.send('Hello from Render!');
});

// Use PORT from environment (Render needs this!)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});