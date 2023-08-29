const express = require("express");

const app = express();


const mountains = [
    {
        name: "Andes",
        height: 6960,
        location: "South America"
    },
    {
        name: "Himalaya",
        height: 8848,
        location: "Asia"
    },
    {
        name: "Rocky Mountains",
        height: 4392,
        location: "North America"
    }
];


app.get("/mountains", (req, res) => {
    res.send(mountains);
});


app.get("/mountains/:id", (req, res) => {
    
    const id = req.params.id;

    // If statements to check if input is a number and if the id exists.
    if (isNaN(id)) {
        res.send({ message: "Invalid ID. Input must be a number." });
    } else if(id >= mountains.length){
        res.send({ message: `The ID ${id} does not exist.` });
    } else {
        res.send(mountains[id]);
    }
})

app.listen(8080);