const express = require('express');
require("dotenv").config();



const connectDB = require("./config/db");
const app = express();

const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require("./routes/recipeRoutes");

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use("/api/recipes", recipeRoutes);

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
   res.send('Server is Running 🚀');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});