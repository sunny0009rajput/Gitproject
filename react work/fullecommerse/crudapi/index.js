const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { auth, requireAdmin } = require("./middleware/auth");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");

const PORT = process.env.PORT_URL;
const MONGO_URI = process.env.MONGO_URI;
const FRONTEND_URL = [
  process.env.FRONTEND_URL_ADMIN,
  process.env.FRONTEND_URL_CUSTOMER,
];

const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || FRONTEND_URL.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Increase the body size limit
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// database connection

mongoose
  .connect(MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// routes
app.use("/auth", authRoutes);

const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const crousalRoutes = require("./routes/crousalRoutes");
const videoRoutes = require("./routes/videoRoutes");
const posterRoutes = require("./routes/posterRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const cartRoutes = require("./routes/cartRoutes");
const paymentRoutes = require ("./routes/paymentRoutes");
app.use("/customer",customerRoutes);
app.use("/", productRoutes);
app.use("/", orderRoutes);
app.use("/",crousalRoutes);
app.use("/", videoRoutes);
app.use("/", posterRoutes); 
app.use("/", wishlistRoutes);
app.use("/",cartRoutes);
app.use("/",paymentRoutes);

module.exports = app;
