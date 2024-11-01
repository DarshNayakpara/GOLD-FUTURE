// server.js
const express = require('express');
const app = express();
const port = 3000; // Change this to your desired port number

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!'); // Respond with a simple message
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
