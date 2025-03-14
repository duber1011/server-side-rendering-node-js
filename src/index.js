const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// EJS config to generate temaplates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.set('views', './src/views'); // also you can use this alternative instead of path.join

// main route config
app.get('/', (req, res) => {
  const data = {
    title: 'Hello World!',
    message: 'Hello World from server-side rendering with Node.js and EJS!',
  };
  res.render('index', data); // Render the index.ejs view
});

// users route config (service that simualates dynamic data)
app.get('/users', (req, res) => {
  // Simulating a user table in a database
  const users = [
    { name: 'Jonh', age: 25 },
    { name: 'Lucy', age: 30 },
    { name: 'Peter', age: 22 },
  ];
  res.render('users', { users }); // Render the user.ejs view
});

// // run server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

module.exports = app;

// If the module is run directly, then start the server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}
