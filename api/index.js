import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Conectado a mongoDB.!!");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("desconexion", () => {
    console.log("Desconectado de mongoDB.!!");
});

mongoose.connection.on("conectado", () => {
    console.log("Conectado de mongoDB.!!");
});

// Middlewares

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(3000, () => {
    connect();
    console.log("Conectado al backend.!!");
});