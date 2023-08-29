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
    const numBottles = 99;
        // res.send('working');
    res.send(`
    <h1>${numBottles} Bottles of beer on the wall, ${numBottles} bottles of beer!</h1>
    <a href='/${numBottles -1}'a>Take one down, pass it around</a>`);
});

app.get('/:number', (req, res) => {
    // const {number_of_bottles} = req.params
    const numBottles = Number(req.params.number);
//     res.send(`
//     <h1>${bottleDown - 1} Bottles of beer on the wall...</h1>
//     <h1>${bottleDown - 1} Bottles of beer on the wall, ${bottleDown -1} of beer!</h1>
//     <a href='/:${bottleDown -1}'a>Take one down, pass it around</a>`)
// });

// app.get(':/bottleDown', (req, res) => {
    let link;

    if(numBottles > 0) {
        (link = `<a href='./${numBottles -1}'>Take one down and pass it around!</a>`)
    } else {
        (link = `<a href='./'> No more bottles left. Start from beginning?</a>`)
    }; 
        res.send(`
        <h1>${numBottles} bottles of beer on the wall, ${numBottles} bottles of beer!</h1>
        ${link}
        `);
    }
);

// app.get('/data', (req, res) => {
//     res.status(data);
// });

// ========================================

// listens for the port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});