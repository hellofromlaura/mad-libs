'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const app = express();

// your code here. 
app.get('/', (req, res) => {
  console.log(req.query);
  
  const {adjective1, adjective2, adjective3, name, place, adverb, noun} = req.query;
  res.send(`There's a ${adjective1} new ${name} in ${place} and everyone's talking. Stunningly ${adjective2} and ${adverb} ${adjective3}, all the cool kids know it. However, ${name} has a secret - ${name}'s a vile vampire.

Will it end with a bite, or with a stake through the ${noun}?`)
})

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
