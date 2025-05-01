const express = require('express');
const app = express();
const port = 3002;
app.get('/product', (req, res) => res.json({ product: "Product-Service response" }));
app.listen(port, () => console.log('product-service listening on port ' + port));