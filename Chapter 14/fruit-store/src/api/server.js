const expressApp = require('express');
const mongooseDB = require('mongoose');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const app = expressApp();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Connect to MongoDB
mongooseDB.connect('mongodb://localhost/auth_demo', { useNewUrlParser: true, useUnifiedTopology: true });

// User model
const User = mongooseDB.model('User', new mongooseDB.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
}));

app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    let newUser = await User.findOne({ email });
    if (newUser) {
      return res.status(400).json({ message: `User already exists with email ${email}. Please sign in with password.` });
    }

    newUser = new User({ email, password });

    // Hash password
    const salt = await bcryptjs.genSalt();
    newUser.password = await bcryptjs.hash(password, salt);
    await newUser.save();

    res.status(201).json({ message: `User signuped successfully with email ${email}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Got server error' });
  }
});

app.post('/api/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      // It's a good practice to not specify if the user exists or not. Just say "Email and password combination not found."
      return res.status(400).json({ message: 'Email and password combination not found.' });
    }

    // Validate password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Email and password combination not found.' });
    }
    res.json(user);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Got server error' });
  }
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

