const express = require('express');
const path = require('path');
const app = express();

// Define the path to your files on your local system
const filePath = 'D:/self hardwork/komal/public';

// Serve static files from the specified directory
app.use(express.static(filePath));

// Routes for serving the HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(filePath, '1 dashboard.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(filePath, '2 signup page.html'));
});

app.get('/interface', (req, res) => {
  res.sendFile(path.join(filePath, '3 interface.html'));
});

app.get('/final', (req, res) => {
  res.sendFile(path.join(filePath, '4 final.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
