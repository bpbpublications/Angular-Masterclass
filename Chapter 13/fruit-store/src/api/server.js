const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const data = [
    { name: 'Apple', price: 1.99, origin: 'USA' },
    { name: 'Banana', price: 0.99, origin: 'Mexico' },
    { name: 'Cherry', price: 2.99, origin: 'Chile' }
];

app.get('/products', (req, res) => {
    res.json(data);
});

app.get('/products/:name', (req, res) => {
  const name = req.params.name;
  const product = data.find((item) => item.name === name);
  if (!product) {
    res.status(404).json({ error: `${name} not found` });
  } else {
    res.json(product);
  }
});

app.post('/products', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

app.put('/products/:name', (req, res) => {
  const name = req.params.name;
  const index = data.findIndex((item) => item.name === name);
  if (index === -1) {
    res.status(404).json({ error: `${name} not found` });
  } else {
    data[index] = req.body;
    res.json(data[index]);
  }
});

app.delete('/products/:name', (req, res) => {
  const name = req.params.name;
  const index = data.findIndex((item) => item.name === name);
  if (index === -1) {
    res.status(404).json({ error: `${name} not found` });
  } else {
    data.splice(index, 1);
    res.json({ message: `${name} deleted` });
  }
});
