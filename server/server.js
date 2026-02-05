import dotenv from "dotenv";
dotenv.config();

import express from 'express'
import cors from 'cors'
// import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'
import mongoose from 'mongoose'


// app config
const app = express()
const port = process.env.PORT || 4000

// Connect to database (CALL THE FUNCTION)
await connectDB()
await connectCloudinary()

// middlewares
app.use(express.json())
// app.use(cors())
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://medi-slot-five.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}))




// api endpoints
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use("/api/user", userRouter)


app.get("/", (req, res) => {
  res.send("API Working")
});

app.get('/test-db', (req, res) => {
  const state = mongoose.connection.readyState;
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  if (state === 1) {
    res.send('Database is connected');
  } else {
    res.status(500).send('Database is NOT connected');
  }
});


app.listen(port, () => console.log(`Server started on PORT:${port}`))
