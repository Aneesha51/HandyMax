// Import required modules
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware to enable CORS for all routes
app.use(cors());  // This will allow all domains

// Alternatively, you can restrict CORS to specific domains like this:
// app.use(cors({
//   origin: 'http://localhost:3000'  // Adjust this URL to your frontend's URL
// }));

// Middleware to parse JSON bodies
app.use(express.json());

// Example POST route
app.post('/contact', (req, res) => {
  const { name, email, number, date } = req.body;

  // You can process the form data here, like inserting it into a database

  console.log('Received:', name, email, number, date);

  // Send a response back
  res.json({ message: 'Appointment made successfully!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
