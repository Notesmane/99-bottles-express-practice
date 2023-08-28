//^ Build an express application that enables users to count down the number of bottles of beer.

const express = require('express');

const app = express();
const PORT = 3000;

// data
const data = [];

// route
app.get('/', (req, res) => {
    // const num = 99;
        res.send('working');
//     res.send(`
//     <h1>${num} Bottles of beer on the wall</h1>
//     <a href='/98'a>Take one down, pass it around</a>`);
// });

// app.get('/98', (req, res) => {
//     const newNum = num - 1;
//     res.send(`
//     <h1>Take one down, pass it around</h1>
//     <a href=`)
});

app.get('/data', (req, res) => {
    res.status(data);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});