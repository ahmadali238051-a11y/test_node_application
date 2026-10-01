
const express = require('express');
const app = express();
const PORT = 4000;


app.get('/', (req, res) => {
    res.send('Hello World! Your app.js backend server is running.');
});


app.listen(PORT, () => {
    console.log(`Server is successfully running at http://localhost:${PORT}`);
});

module.exports = app;
