'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  const r = parseFloat(req.params.r);
  
  const area = (Math.PI * r * r).toFixed(2);
  const circumference = (2 * Math.PI * r).toFixed(2);
  
  const result = {
    area: area,
    circumference: circumference
  };
  
  res.json(result);
});

//TODO2
app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);

  const area = width * height;
  const perimeter = 2 * (width + height);

  res.json({ area: area, perimeter: perimeter });
});

//TODO3
app.get('/math/power/:base/:exponent', (req, res) => {
  const base = parseFloat(req.params.base);
  const exponent = parseFloat(req.params.exponent);

  if (isNaN(base) || isNaN(exponent)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const result = Math.pow(base, exponent);

  const response = { result: result };

  // optional query param root=true to include sqrt(base)
  if (req.query.root === 'true') {
    response.root = Math.sqrt(base);
  }

  res.json(response);
});


const PORT = process.env.PORT || 5000;
app.listen(5000, '0.0.0.0', () => {

  console.log('Server started on port 5000');

});