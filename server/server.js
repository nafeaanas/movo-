import express  from "express";
import cors from "cors";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import UserRouter from "./Routes/UserRouter.js"
import moviesRouter from "./Routes/MoviesRouter.js"
import { errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB()

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use("/api/user", UserRouter);
app.use("/api/movies", moviesRouter);

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running in http://localhost/${PORT}`);
})