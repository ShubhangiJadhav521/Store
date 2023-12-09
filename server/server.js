const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const storeRoutes = require('./Routes/storeroute'); 
const Connection = require('./db.js');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', storeRoutes); // Use the imported route here

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
Connection()