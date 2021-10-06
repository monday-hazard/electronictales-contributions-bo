const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Middleware that ensures Express knows input data is in JSON format
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/topics', require('./routes/api/topics'));
app.use('/api/articles', require('./routes/api/articles'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));