const express = require('express');
const app = express();
const port = 3001;
app.get('/user', (req, res) => res.json({ user: "User-Service response" }));
app.listen(port, () => console.log('user-service listening on port ' + port));