import connectToMongo from "./database/db.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Routes from "./routes/Route.js";

connectToMongo();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
    res.send("Welcome to the Payment Integration API");
});

app.use("/api/payments",Routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
dotenv.config();

