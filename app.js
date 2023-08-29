const express = require("express");

const app = express();

const mountains = [
  {
    id: 1,
    name: "Andes",
    height: 6960,
    location: "South America",
  },
  {
    id: 2,
    name: "Himalaya",
    height: 8848,
    location: "Asia",
  },
  {
    id: 3,
    name: "Rocky Mountains",
    height: 4392,
    location: "North America",
  },
];

app.get("/mountains", (req, res) => {

  res.send(mountains);

});

// Below code finds mountain by assigned id.
app.get("/mountains/:id", (req, res) => {

  const id = parseInt(req.params.id);

  // Find mountain by id
  const mountain = mountains.find(mountain => mountain.id === id);

  if (!mountain) {
    res.send({ message: "No mountain with that id." });
  } else {
    res.send(mountain);
  }
});

// Below code finds mountain by index in the Array.
/* app.get("/mountains/:id", (req, res) => {
  
    const id = req.params.id;

  // If statements to check if input is a number and if the id exists.
  if (isNaN(id) || id >= mountains.length) {
    res.send({ message: `Invalid ID. Input must be a number within valid range (0-${mountains.length - 1}).` });
  } else {
    res.send(mountains[id]);
  }
}); */

app.listen(8080);
