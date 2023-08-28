//^ Build an express application that enables users to count down the number of bottles of beer.

// sets up the page
const express = require('express');
const app = express();
const PORT = 3000;

// data
// const data = [];

// ========================================

// route
app.get('/', (req, res) => {
    const num = 99;
        // res.send('working');
    res.send(`
    <h1>${num} Bottles of beer on the wall, ${num} bottles of beer!</h1>
    <a href='/${num - 1}'a>Take one down, pass it around</a>`);
});

app.get('/:number_of_bottles', (req, res) => {
    const {number_of_bottles} = req.params
    const bottleDown = number_of_bottles - 1;
    res.send(`
    <h1>${number_of_bottles} Bottles of beer on the wall...</h1>
    <h1>${number_of_bottles} Bottles of beer on the wall, ${number_of_bottles} of beer!</h1>
    <a href='/:${bottleDown}'a>Take one down, pass it around</a>`)
});


app.get(':/bottleDown', (req, res) => {
    if(bottleDown > 0) {
        res.send(`
        <h1>${bottleDown} Bottles of beer on the wall</h1>
        <a href=''a>Take one down, pass it around</a>
        `);
    } else {
        res.send(`
        <h1>No more bottles left. :(</h1>
        `);
    }
});


// app.get('/data', (req, res) => {
//     res.status(data);
// });

// ========================================

// listens for the port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});