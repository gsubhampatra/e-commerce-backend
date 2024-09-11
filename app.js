import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//routes
app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome E-commerce API" }).status(200);
});

import authRoutes from './routes/auth.route.js';

app.use('/api/auth', authRoutes);




export default app;
