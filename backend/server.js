const express = require('express');
require("dotenv").config();



const connectDB = require("./config/db");
const app = express();

const userRoutes = require('./routes/userRoutes');

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
   res.send('Server is Running 🚀');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});