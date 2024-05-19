import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import session from "express-session"
import passport from 'passport';

import connectDB from './db/connectDB.js';

import userRoutes from './Routes/userRoutes.js'
import authRoutes from './Routes/authRoutes.js'

import './passport/github.auth.js'


const app=express();

app.use(express.json());

const corsOptions = {
    origin: true, // Reflects the request origin
    credentials: true, // Allows cookies and other credentials
};

app.use(cors(corsOptions));

app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


dotenv.config();



app.get('/',(req,res)=>{
    res.send('API is running...');
})

app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes);


app.listen(5000,()=>{
    connectDB();
    console.log('Server started on http://localhost:5000');
})