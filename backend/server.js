const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", contactRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "contacts-db",
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
