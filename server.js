require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use("/api/auth", authRoutes);
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AeriVibe API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
