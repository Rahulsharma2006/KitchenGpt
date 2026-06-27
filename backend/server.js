const express = require('express');
require("dotenv").config();




const connectDB = require("./config/db");
const app = express();

const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require("./routes/recipeRoutes");
const adminRoutes = require("./routes/adminRoutes");
const reportRoutes = require("./routes/reportRoutes");
const aiRoutes=require("./routes/aiRoutes");


connectDB();

app.use(express.json());

app.use("/api/reports", reportRoutes);
app.use('/api/users', userRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/ai",aiRoutes);

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
   res.send('Server is Running 🚀');
});
 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});