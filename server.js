const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Route to handle the file overwrite operation
app.post('/save-json', (req, res) => {
  const jsonData = req.body;

  // Convert the modified JSON data back to a string
  const modifiedJsonString = JSON.stringify(jsonData);

  // Overwrite the file on the server
  fs.writeFile('src/sudb.json', modifiedJsonString, err => {
    if (err) {
      console.error('Error saving JSON data:', err);
      res.status(500).send('Error saving JSON data');
    } else {
      console.log('JSON data saved successfully');
      res.send('JSON data saved successfully');
    }
  });
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
