const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const dataRoutes = require("./routes/dataRoutes");
app.use("/api", dataRoutes);

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/iot_botnet")
   

.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});