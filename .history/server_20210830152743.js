const express = require('express');
const connectDB = require('./config/default.json')

const app = express();

//connect data base


app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
