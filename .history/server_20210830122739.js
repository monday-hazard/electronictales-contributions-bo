const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

const PORT = prpcess.env.PORT || 5000;

app.listen(PORT,)