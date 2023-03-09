// initilze server
const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.static('public'));
app.use(express.json());
// Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// PORTS
const PORT = process.env.PORT || 3001;


//LISTENS FOR REQUESTS ON SELECTED PORT
  app.listen(PORT, () => {
   console.info(`App listening at http://localhost:${PORT} 🚀`);
  });