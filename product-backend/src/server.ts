import express from 'express';
import bodyParser from 'body-parser';
import { products } from './fake-data';
import { cartItems } from './fake-data';
const app = express();
app.use(bodyParser.json());

//All Testing Endpoints (Thanks to Github Co-Pilot!)
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.post('/hello', (req, res) => {  
  res.send(`Hello ${req.body.name}!`);
});

app.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name}!`);
});

app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/api/cartItems', (req, res) => {
  res.status(200).json(cartItems);
});

app.get('/api/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const product = products.find(p => p.id === productId);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

//Extras (Not Necessarily they will work but for testing)
app.post('/api/products', (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).json(product);
});

app.delete('/api/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const product = products.find(p => p.id === productId);
  if (product) {
    products.splice(products.indexOf(product), 1);
    res.status(200).json(product);
  } else {
    res.status(404).send('Product not found');
  }
});



app.listen(8000, () => {
  console.log('Listening on port 8000');
});

