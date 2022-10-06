import express from "express";
import { config } from "dotenv";
import courseRouter from "./routes/courseRoutes.js";
import userRouter from "./routes/userRoutes.js";
import paymentRouter from "./routes/paymentRoutes.js"
import otherRouter from './routes/otherRoutes.js'
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
config({
  path: "./config/config.env",
});
const app = express();
app.use(express.json())
app.use(express.urlencoded({
  extended : true
}))
app.use(cookieParser())
app.use("/api/v1", courseRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", paymentRouter);
app.use("/api/v1", otherRouter);
export default app;
app.use(errorMiddleware);