const express = require('express');
const app = express();
const port = 3000;
app.get('/frontend', (req, res) => res.json({ frontend: "Frontend response" }));
app.listen(port, () => console.log('frontend listening on port ' + port));